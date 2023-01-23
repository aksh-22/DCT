import React from 'react';
import {ActivityIndicator, View} from 'react-native';
import CustomButton from 'src/components/button/CustomButton';
import CustomHeader from 'src/components/header/CustomHeader';
import colors from 'src/constants/colors';
import {useRequest} from 'src/constants/useRequest';
import Container from 'src/container/Container';
import {BottomStackProps} from 'src/routes/types/navigation';
import Deposit from './Deposit';
import homeStyle from './home.style';
import MarketItem from './MarketItem';

const Home = ({}: BottomStackProps) => {
  const onMarketFetchSuccess = data => {
    console.log('data', JSON.stringify(data, null, 2));
  };

  const {isLoading} = useRequest({
    endpoint: 'markets',
    onSuccess: onMarketFetchSuccess,
    callApiByDefault: true,
  });

  return (
    <>
      <CustomHeader heading="DCT" />
      <Container contentContainerStyle={homeStyle.container}>
        <CustomButton
          disabled
          title="Welcome To DCT"
          style={homeStyle.welcomeBox}
        />
        <Deposit />
        <View style={homeStyle.marketList}>
          {isLoading ? (
            <ActivityIndicator size={'large'} color={colors.buttonColor1} />
          ) : (
            Array(20)
              .fill('')
              .map((el, index) => <MarketItem item={el} key={index} />)
          )}
        </View>
      </Container>
    </>
  );
};

export default Home;
