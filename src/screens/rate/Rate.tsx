import React from 'react';
import {View} from 'react-native';
import CustomText from 'src/components/CustomText';
import CustomHeader from 'src/components/header/CustomHeader';
import colors from 'src/constants/colors';
import globalStyles from 'src/constants/globalStyles';
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
      <CustomHeader isBack heading="Game Rates" />
      <Container
        contentContainerStyle={globalStyles.pdb_100}
        containerLoading={isLoading}>
        <View style={rateStyle.listHeader}>
          <View style={rateStyle.column}>
            <CustomText size={20}>Game Name</CustomText>
          </View>
          <View style={[rateStyle.column, {borderLeftWidth: 0}]}>
            <CustomText size={20}>Price</CustomText>
          </View>
          {/* <View style={globalStyles.verticalLine} /> */}
        </View>
        <View style={rateStyle.lineArea}>
          <View style={globalStyles.verticalLine} />
          <View style={globalStyles.verticalLine} />
        </View>
        {dataFetched?.data?.gamerates.map(el => (
          <View style={rateStyle.row} key={el.id}>
            <View style={rateStyle.column}>
              <CustomText color={colors.label}>{el.game?.name}</CustomText>
            </View>
            <View style={[rateStyle.column, {borderLeftWidth: 0}]}>
              <CustomText color={colors.label}>{el.price}</CustomText>
            </View>
            {/* <View style={globalStyles.verticalLine} /> */}
          </View>
        ))}
      </Container>
    </>
  );
};

export default Rate;
