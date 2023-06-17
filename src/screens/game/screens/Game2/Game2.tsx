import React from 'react';
import {TextInput, View} from 'react-native';
import CustomText from 'src/components/CustomText';
import CustomHeader from 'src/components/header/CustomHeader';
import {margin, padding} from 'src/constants/globalStyles';
import Container from 'src/container/Container';
import {game2Data, game2HeaderData} from 'src/utils/gameData';
import useGame2 from './useGame2';
import gameStyle from '../game.style';
import AmountBox from '../AmountBox';

type Props = {};

const Game2 = ({}: Props) => {
  const {total, onChange} = useGame2();
  return (
    <>
      <CustomHeader heading="Capital morning" isBack showBell={false} status />
      <Container style={padding('10', '20')}>
        <View>
          <CustomText size={20}>Single Ank</CustomText>
          <CustomText color="active" style={padding(5)}>
            18 Jan 2023
          </CustomText>
        </View>
        <View style={gameStyle.boxHeaderArea}>
          {game2HeaderData.map(el => {
            return (
              <View key={el} style={gameStyle.headerBoxWrapper}>
                <View style={gameStyle.headerBox}>
                  <CustomText>{el}</CustomText>
                </View>
              </View>
            );
          })}
        </View>
        <View style={gameStyle.boxArea}>
          {game2Data.map((el, i) => {
            return (
              <View key={i} style={margin(30)}>
                <CustomText center>{el}</CustomText>
                <View style={gameStyle.box2}>
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
      <AmountBox total={total} />
    </>
  );
};

export default Game2;
