import React from 'react';
import {View} from 'react-native';
import CustomText from 'src/components/CustomText';
import CustomHeader from 'src/components/header/CustomHeader';
import colors from 'src/constants/colors';
import globalStyles from 'src/constants/globalStyles';
import rateList from 'src/constants/rateList';
import {BottomStackName} from 'src/constants/routeNames';
import Container from 'src/container/Container';
import rateStyle from './rate.style';

const Rate = ({}: BottomStackName) => {
  return (
    <>
      <CustomHeader isBack heading="Game Rates" />
      <Container>
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
        {rateList.map(el => (
          <View style={rateStyle.row} key={el.id}>
            <View style={rateStyle.column}>
              <CustomText color={colors.label}>{el.name}</CustomText>
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
