import React from 'react';
import {View} from 'react-native';
import {useDispatch} from 'react-redux';
import CustomHeader from 'src/components/header/CustomHeader';
import {padding} from 'src/constants/globalStyles';
import {useRequest} from 'src/constants/useRequest';
import Container from 'src/container/Container';
import {BottomStackProps} from 'src/routes/types/navigation';
import {setShareLink} from 'src/store/reducer/userReducer';
import {marketDataType} from 'typings/market-data-type';
import Deposit from './deposit/Deposit';
import homeStyle from './home.style';
import MarketItem from './marketItem/MarketItem';

type RProps = {
  isLoading: boolean;
  dataFetched: {
    data: marketDataType;
  };
  sendRequest: (data?: any) => void;
};

const Home = ({}: BottomStackProps) => {
  const dispatch = useDispatch();

  const onSuccess = (fData: {data: marketDataType}) => {
    dispatch(setShareLink(fData.data.share_link));
  };

  const {isLoading, dataFetched, sendRequest}: RProps = useRequest({
    endpoint: 'markets',
    callApiByDefault: true,
    onSuccess: onSuccess,
  });

  return (
    <>
      <CustomHeader leftSmallTitle="Welcome to" leftTitle="DCT" />
      <Container
        onRefresh={sendRequest}
        refreshLoading={dataFetched?.data?.markets?.length && isLoading}
        contentContainerStyle={padding(0, 100, 20, 20)}
        containerLoading={!dataFetched?.data?.markets?.length && isLoading}>
        <Deposit />
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
