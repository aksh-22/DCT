import React from 'react';
import {ImageBackground, View} from 'react-native';
import Timeline from 'react-native-timeline-flatlist';
import CustomText from 'src/components/CustomText';
import CustomHeader from 'src/components/header/CustomHeader';
import {padding} from 'src/constants/globalStyles';
import howToPlayData from 'src/constants/howToPlayData';
import Container from 'src/container/Container';
import ContainerWithoutScroll from 'src/container/ContainerWithoutScroll';
import playStyle from './play.style';
import Shape from 'src/assets/svg/shape/gameRateShape.svg';

type Props = {};

const HowToPlay = ({}: Props) => {
  return (
    <>
      <CustomHeader isBack heading="How To Play" />
      <Container contentContainerStyle={padding(0, 100, 20, 20)}>
        {howToPlayData.map((el, i) => (
          <View key={i} style={playStyle.item}>
            {/* <View style={playStyle.svgWrapper}>
              <Shape width="100%" />
            </View> */}
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
