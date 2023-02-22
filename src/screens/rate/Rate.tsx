import React from 'react';
import {View} from 'react-native';
import CustomText from 'src/components/CustomText';
import CustomHeader from 'src/components/header/CustomHeader';
import {padding} from 'src/constants/globalStyles';
import {BottomStackName} from 'src/constants/routeNames';
import {useRequest} from 'src/constants/useRequest';
import Container from 'src/container/Container';
import {gameRatesType} from 'typings/game-rate-data-type';
import rateStyle from './rate.style';

type RProps = {
  isLoading: boolean;
  dataFetched: {
    data: gameRatesType;
  };
};

const Rate = ({}: BottomStackName) => {
  const {isLoading, dataFetched}: RProps = useRequest({
    endpoint: 'game-rates',
    callApiByDefault: true,
  });

  return (
    <>
      <CustomHeader
        isBack
        showBell={false}
        showWallet={false}
        heading=" Game Rate"
      />
      <Container
        contentContainerStyle={padding(0, 100, 20, 20)}
        containerLoading={isLoading}>
        <View style={rateStyle.listHeader}>
          <CustomText size={15} color="light_purple">
            Game Name
          </CustomText>
          <CustomText size={15} color="light_purple">
            Price
          </CustomText>
        </View>
        {dataFetched?.data?.gamerates.map(el => (
          <View style={rateStyle.row} key={el.id}>
            <CustomText color="white">{el.game?.name}</CustomText>
            <CustomText color="white">{el.price}</CustomText>
          </View>
        ))}
      </Container>
    </>
  );
};

export default Rate;
