import React from 'react';
import {View} from 'react-native';
import {useDispatch} from 'react-redux';
import CustomButton from 'src/components/button/CustomButton';
import CustomHeader from 'src/components/header/CustomHeader';
import Container from 'src/container/Container';
import {BottomStackProps} from 'src/routes/types/navigation';
import {setIsLoggedIn} from 'src/store/reducer/userReducer';
import Deposit from './Deposit';
import homeStyle from './home.style';
import MarketItem from './MarketItem';

const Home = ({}: BottomStackProps) => {
  const dispatch = useDispatch();

  const onPress = () => {
    dispatch(setIsLoggedIn(false));
  };

  return (
    <>
      <CustomHeader heading="DCT" />
      <Container contentContainerStyle={homeStyle.container}>
        <CustomButton
          disabled
          title="Welcome To DCT"
          onPress={onPress}
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
