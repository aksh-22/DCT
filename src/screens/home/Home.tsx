import React from 'react';
import {View} from 'react-native';
import {useDispatch} from 'react-redux';
import CustomButton from 'src/components/button/CustomButton';
import CustomHeader from 'src/components/header/CustomHeader';
import {useRequest} from 'src/constants/useRequest';
import Container from 'src/container/Container';
import {BottomStackProps} from 'src/routes/types/navigation';
import {setShareLink} from 'src/store/reducer/userReducer';
import {marketDataType} from 'typings/market-data-type';
import Deposit from './Deposit';
import homeStyle from './home.style';
import MarketItem from './MarketItem';

type RProps = {
  isLoading: boolean;
  dataFetched: {
    data: marketDataType;
  };
};

const Home = ({}: BottomStackProps) => {
  const dispatch = useDispatch();

  const onSuccess = (fData: {data: marketDataType}) => {
    console.log('fData', JSON.stringify(fData, null, 2));
    dispatch(setShareLink(fData.data.share_link));
  };

  const {isLoading, dataFetched}: RProps = useRequest({
    endpoint: 'markets',
    callApiByDefault: true,
    onSuccess: onSuccess,
  });

  return (
    <>
      <CustomHeader heading="DCT" />
      <Container
        contentContainerStyle={homeStyle.container}
        containerLoading={isLoading}>
        <CustomButton
          disabled
          title="Welcome To DCT"
          style={homeStyle.welcomeBox}
        />
        <Deposit customText={dataFetched?.data?.custom_text} />
        <View style={homeStyle.marketList}>
          {dataFetched?.data?.markets?.map((el, index) => (
            <MarketItem item={el} key={index} />
          ))}
        </View>
      </Container>
    </>
  );
};

export default Home;
