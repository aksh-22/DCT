import React from 'react';
import {View} from 'react-native';
import CustomButton from 'src/components/button/CustomButton';
import CustomHeader from 'src/components/header/CustomHeader';
import {useRequest} from 'src/constants/useRequest';
import Container from 'src/container/Container';
import {BottomStackProps} from 'src/routes/types/navigation';
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
  const {isLoading, dataFetched}: RProps = useRequest({
    endpoint: 'markets',
    callApiByDefault: true,
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
