import React from 'react';
import {TouchableOpacity, View} from 'react-native';
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
import DetailBox from '../DetailBox';
import {AuthorizedStackProps} from 'src/routes/types/navigation';
import game4Style from './game4.style';
import {formatClosePanna, formatOpenPanna} from '../../list/getGameData';

const Game4 = ({route, navigation}: AuthorizedStackProps) => {
  const {onChange, total, bidData, data, onAdd, onRemove} = useGame4({
    route,
    navigation,
  });
  return (
    <>
      <CustomHeader heading="Capital morning" isBack showBell={false} status />
      <Container style={padding('10', '20')}>
        <DetailBox params={route?.params} />
        <View style={game3Style.container}>
          <View style={game3Style.inputArea}>
            <View style={game3Style.inputBoxArea}>
              <CustomInput
                mainContainerStyle={game4Style.inputStyle}
                placeholder="Open Panna"
                inputBoxStyle={game4Style.inputBoxStyle}
                keyboardType="decimal-pad"
                value={data?.open}
                onChangeText={val => onChange('open', formatOpenPanna(val))}
                maxLength={5}
              />
              <CustomInput
                mainContainerStyle={game4Style.inputStyle}
                placeholder="Close Panna"
                inputBoxStyle={game4Style.inputBoxStyle}
                keyboardType="decimal-pad"
                value={data?.close}
                onChangeText={val => onChange('close', formatClosePanna(val))}
                maxLength={5}
              />
              <CustomInput
                mainContainerStyle={game4Style.inputStyle}
                placeholder="Points"
                inputBoxStyle={game4Style.inputBoxStyle}
                keyboardType="decimal-pad"
                value={data?.points}
                onChangeText={val => onChange('points', val)}
                maxLength={5}
              />
            </View>
            <CustomButton onPress={onAdd} style={game3Style.button}>
              <VectorIcon color={colors.white} size={20} name="add" />
            </CustomButton>
          </View>
          <View style={game3Style.listArea}>
            {bidData.map((el, i) => (
              <View key={i} style={game3Style.listItem}>
                <CustomText color="borderColor">
                  Open panna:{el?.open}, Open panna:{el?.close}, Points:
                  {el?.points}
                </CustomText>
                <TouchableOpacity onPress={onRemove.bind(this, i)}>
                  <VectorIcon
                    color={colors.active}
                    family="Ionicons"
                    name="close-circle-outline"
                    size={30}
                  />
                </TouchableOpacity>
              </View>
            ))}
          </View>
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

export default Game4;
