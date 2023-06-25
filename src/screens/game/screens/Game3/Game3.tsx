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
import game3Style from './game3.style';
import useGame3 from './useGame3';
import {AuthorizedStackProps} from 'src/routes/types/navigation';
import dayjs from 'dayjs';

const Game3 = ({navigation, route}: AuthorizedStackProps) => {
  const {total, data, onChange} = useGame3({navigation, route});
  const params: any = route?.params;
  return (
    <>
      <CustomHeader heading="Capital morning" isBack showBell={false} status />
      <Container style={padding('10', '20')}>
        <View>
          <CustomText size={20}>{params?.name}</CustomText>
          <CustomText color="active" style={padding(5)}>
            {dayjs().format('DD MMM YYYY')}
          </CustomText>
        </View>
        <View style={game3Style.container}>
          <View style={game3Style.inputArea}>
            <View style={game3Style.inputBoxArea}>
              <CustomInput
                mainContainerStyle={game3Style.inputStyle}
                placeholder="Group jodi"
                value={data?.group}
                onChangeText={val => onChange('group', val)}
              />
              <CustomInput
                mainContainerStyle={game3Style.inputStyle}
                placeholder="Points"
                value={data?.points}
                onChangeText={val => onChange('points', val)}
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

export default Game3;
