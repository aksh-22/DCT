import React from 'react';
import {TextInput, View} from 'react-native';
import CustomText from 'src/components/CustomText';
import CustomButton from 'src/components/button/CustomButton';
import CustomHeader from 'src/components/header/CustomHeader';
import {margin, padding} from 'src/constants/globalStyles';
import Container from 'src/container/Container';
import {game3Data} from 'src/utils/gameData';
import gameStyle from '../game.style';
import useGame3 from './useGame3';

type Props = {};

const Game3 = ({}: Props) => {
  const {onChange, total} = useGame3();
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
          {game3Data.map(el => {
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
        <View style={gameStyle.amountArea}>
          <CustomText center color="purple">
            Total {total}
          </CustomText>
          <CustomButton title="Place bid" />
        </View>
      </Container>
    </>
  );
};

export default Game3;
