import {View, Text, TextInput} from 'react-native';
import React from 'react';
import CustomHeader from 'src/components/header/CustomHeader';
import Container from 'src/container/Container';
import CustomText from 'src/components/CustomText';
import {padding} from 'src/constants/globalStyles';
import {margin} from 'src/constants/globalStyles';
import gameStyle from './game.style';

type Props = {};

const Game1 = ({}: Props) => {
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
          {Array(10)
            .fill('')
            .map((el, i) => {
              return (
                <View key={i} style={gameStyle.box1}>
                  <TextInput maxLength={1} keyboardType="decimal-pad" />
                </View>
              );
            })}
        </View>
      </Container>
    </>
  );
};

export default Game1;
