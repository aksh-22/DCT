import React from 'react';
import {TextInput, View} from 'react-native';
import CustomText from 'src/components/CustomText';
import CustomHeader from 'src/components/header/CustomHeader';
import {margin, padding} from 'src/constants/globalStyles';
import Container from 'src/container/Container';
import {game4Data} from 'src/utils/gameData';
import AmountBox from '../AmountBox';
import gameStyle from '../game.style';
import useGame4 from './useGame4';

type Props = {};

const Game4 = ({}: Props) => {
  const {onChange, total} = useGame4();
  return (
    <>
      <CustomHeader heading="Capital morning" isBack showBell={false} status />
      <Container style={padding('10', '20')}>
        <View>
          <CustomText size={20}>Single Ank</CustomText>
          <CustomText color="active" style={padding(5)}>
            28 Jan 2023
          </CustomText>
        </View>
        <View style={gameStyle.boxArea}>
          {game4Data.map(el => {
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
        <AmountBox total={total} />
      </Container>
    </>
  );
};

export default Game4;
