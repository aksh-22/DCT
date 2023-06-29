import React from 'react';
import {TextInput, View} from 'react-native';
import CustomText from 'src/components/CustomText';
import CustomHeader from 'src/components/header/CustomHeader';
import {margin, padding} from 'src/constants/globalStyles';
import Container from 'src/container/Container';
import {AuthorizedStackProps} from 'src/routes/types/navigation';
import AmountBox from '../AmountBox';
import gameStyle from '../game.style';
import useGame1 from './useGame1';
import DetailBox from '../DetailBox';

const Game1 = ({route, navigation}: AuthorizedStackProps) => {
  const {onChange, total, numberData, bidData} = useGame1({
    route,
    navigation,
  });
  return (
    <>
      <CustomHeader heading="Capital morning" isBack showBell={false} status />
      <Container style={padding('10', '20')}>
        <DetailBox params={route?.params} />
        <View style={gameStyle.boxArea}>
          {numberData?.map(el => {
            return (
              <View key={el} style={margin(30)}>
                <CustomText center>{el}</CustomText>
                <View style={gameStyle.box1}>
                  <TextInput
                    onChangeText={txt => {
                      onChange({[el]: txt});
                    }}
                    maxLength={5}
                    keyboardType="decimal-pad"
                  />
                </View>
              </View>
            );
          })}
        </View>
      </Container>
      <AmountBox
        bidData={bidData}
        navigation={navigation}
        total={total}
        params={route?.params}
      />
    </>
  );
};

export default Game1;
