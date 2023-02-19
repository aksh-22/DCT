import React from 'react';
import {View} from 'react-native';
import CustomText from 'src/components/CustomText';
import CustomHeader from 'src/components/header/CustomHeader';
import {padding} from 'src/constants/globalStyles';
import howToPlayData from 'src/constants/howToPlayData';
import Container from 'src/container/Container';
import playStyle from './play.style';

type Props = {};

const HowToPlay = ({}: Props) => {
  return (
    <>
      <CustomHeader isBack heading="How To Play" />
      <Container contentContainerStyle={padding(0, 100, 20, 20)}>
        {howToPlayData.map((el, i) => (
          <View key={i} style={playStyle.item}>
            <CustomText size={18}>{el.title}</CustomText>
            <CustomText size={15} style={playStyle.descriptionStyle}>
              {el.description}
            </CustomText>
          </View>
        ))}
      </Container>
    </>
  );
};

export default HowToPlay;
