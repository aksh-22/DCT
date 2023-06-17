import React from 'react';
import {TextInput, View} from 'react-native';
import CustomText from 'src/components/CustomText';
import CustomHeader from 'src/components/header/CustomHeader';
import {margin, padding} from 'src/constants/globalStyles';
import Container from 'src/container/Container';
import {game3Data} from 'src/utils/gameData';
import AmountBox from '../AmountBox';
import gameStyle from '../game.style';
import useGame3 from './useGame3';
import CustomInput from 'src/components/Input/CustomInput';
import game3Style from './game3.style';
import CustomButton from 'src/components/button/CustomButton';
import VectorIcon from 'src/components/IconsFamily';
import colors from 'src/constants/colors';

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
        <View style={game3Style.container}>
          <View style={game3Style.inputBozArea}>
            <CustomInput
              mainContainerStyle={game3Style.inputSTyle}
              placeholder="Group jodi"
            />
            <CustomInput
              mainContainerStyle={game3Style.inputSTyle}
              placeholder="Points"
            />
          </View>
          <CustomButton style={game3Style.button}>
            <VectorIcon color={colors.white} size={20} name="add" />
          </CustomButton>
        </View>
        <AmountBox total={total} />
      </Container>
    </>
  );
};

export default Game3;
