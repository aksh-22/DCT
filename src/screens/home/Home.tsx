import React from 'react';
import {View} from 'react-native';
import CustomButton from 'src/components/button/CustomButton';
import CustomHeader from 'src/components/header/CustomHeader';
import colors from 'src/constants/colors';
import Container from 'src/container/Container';
import {BottomStackProps} from 'src/routes/types/navigation';
import Deposit from './Deposit';
import homeStyle from './home.style';
import MarketItem from './MarketItem';

const Home = ({}: BottomStackProps) => {
  return (
    <>
      <CustomHeader heading="DCT" />
      <Container
        barStyle="light-content"
        statusBarColor={colors.buttonColor1}
        contentContainerStyle={homeStyle.container}>
        <CustomButton
          disabled
          title="Welcome To DCT"
          style={homeStyle.welcomeBox}
        />
        <Deposit />
        <View style={homeStyle.marketList}>
          {Array(20)
            .fill('')
            .map((el, index) => (
              <MarketItem item={el} key={index} />
            ))}
        </View>
      </Container>
    </>
  );
};

export default Home;
