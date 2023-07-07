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
import DetailBox from '../DetailBox';
import {AuthorizedStackProps} from 'src/routes/types/navigation';
import LoadingContainer from 'src/components/loading/LoadingContainer';

const Game2 = ({route, navigation}: AuthorizedStackProps) => {
  const {onChange, total, bidData, showData} = useGame2({
    route,
    navigation,
  });
  const {market}: any = route?.params;

  return showData ? (
    <>
      <CustomHeader
        heading="Capital morning"
        isBack
        showBell={false}
        status={market?.type}
      />
      <Container style={padding('10', '20')}>
        <DetailBox params={route?.params} />
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
      <AmountBox
        bidData={bidData}
        navigation={navigation}
        total={total}
        params={route?.params}
      />
    </>
  ) : (
    <LoadingContainer />
  );
};

export default Game2;
