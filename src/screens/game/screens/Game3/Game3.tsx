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
import {AuthorizedStackProps} from 'src/routes/types/navigation';
import AmountBox from '../AmountBox';
import DetailBox from '../DetailBox';
import game3Style from './game3.style';
import useGame3 from './useGame3';
import {gamePlaceHolder} from '../../list/getGameData';

const Game3 = ({route, navigation}: AuthorizedStackProps) => {
  const {onChange, total, bidData, data, onAdd, onRemove, numStr, length} =
    useGame3({
      route,
      navigation,
    });
  const {key, market}: any = route?.params;

  return (
    <>
      <CustomHeader
        heading="Capital morning"
        isBack
        showBell={false}
        status={market?.type}
      />
      <Container style={padding('10', '20')}>
        <DetailBox params={route?.params} />
        <View style={game3Style.container}>
          <View style={game3Style.inputArea}>
            <View style={game3Style.inputBoxArea}>
              <CustomInput
                mainContainerStyle={game3Style.inputStyle}
                placeholder={gamePlaceHolder[key]}
                value={data?.group}
                onChangeText={val => onChange('group', val)}
                keyboardType="number-pad"
                maxLength={length ?? 2}
              />
              <CustomInput
                mainContainerStyle={game3Style.inputStyle}
                placeholder="Points"
                value={data?.points}
                onChangeText={val => onChange('points', val)}
                keyboardType="number-pad"
                maxLength={5}
              />
            </View>
            <CustomButton onPress={onAdd} style={game3Style.button}>
              <VectorIcon color={colors.white} size={20} name="add" />
            </CustomButton>
          </View>
          <View style={game3Style.listArea}>
            {data?.group?.trim()?.length > 1 && (
              <CustomText size={18}>
                Bet patties : {numStr.length ? numStr : 'Patti not found'}
              </CustomText>
            )}
            {bidData.map((el, i) => (
              <View key={i} style={game3Style.listItem}>
                <CustomText color="borderColor">
                  Number:{el?.group}, Points:{el?.points}
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

export default Game3;
