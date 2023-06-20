import React from 'react';
import {View} from 'react-native';
import CustomText from 'src/components/CustomText';
import VectorIcon from 'src/components/IconsFamily';
import CustomInput from 'src/components/Input/CustomInput';
import CustomButton from 'src/components/button/CustomButton';
import CustomHeader from 'src/components/header/CustomHeader';
import colors from 'src/constants/colors';
import {padding} from 'src/constants/globalStyles';
import Container from 'src/container/Container';
import AmountBox from '../AmountBox';
import useGame4 from './useGame4';
import game3Style from '../Game3/game3.style';
import game4Style from './game4.style';

type Props = {};

const Game4 = ({}: Props) => {
  const {total} = useGame4();
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
        <View style={game3Style.container}>
          <View style={game4Style.typeBox}>
            <CustomText size={15} color="white">
              Open Patti{'   '}
              {'<'} {'='} {'>'}
              {'   '}Close Patti
            </CustomText>
          </View>
          <View style={game3Style.inputArea}>
            <View style={game3Style.inputBoxArea}>
              <CustomInput
                mainContainerStyle={game4Style.inputStyle}
                placeholder="Open Panna"
                inputBoxStyle={game4Style.inputBoxStyle}
                keyboardType="decimal-pad"
              />
              <CustomInput
                mainContainerStyle={game4Style.inputStyle}
                placeholder="Close Panna"
                inputBoxStyle={game4Style.inputBoxStyle}
                keyboardType="decimal-pad"
              />
              <CustomInput
                mainContainerStyle={game4Style.inputStyle}
                placeholder="Points"
                inputBoxStyle={game4Style.inputBoxStyle}
                keyboardType="decimal-pad"
              />
            </View>
            <CustomButton style={game3Style.button}>
              <VectorIcon color={colors.white} size={20} name="add" />
            </CustomButton>
          </View>
          <View style={game3Style.listArea}>
            {Array(3)
              .fill('')
              .map((el, i) => (
                <View key={i} style={game3Style.listItem}>
                  <CustomText color="borderColor">
                    Number:56, Points:10
                  </CustomText>
                  <VectorIcon
                    color={colors.active}
                    family="Ionicons"
                    name="close-circle-outline"
                    size={30}
                  />
                </View>
              ))}
          </View>
        </View>
      </Container>
      <AmountBox total={total} />
    </>
  );
};

export default Game4;