import React from 'react';
import Timeline from 'react-native-timeline-flatlist';
import CustomHeader from 'src/components/header/CustomHeader';
import howToPlayData from 'src/constants/howToPlayData';
import ContainerWithoutScroll from 'src/container/ContainerWithoutScroll';
import playStyle from './play.style';

type Props = {};

const HowToPlay = ({}: Props) => {
  return (
    <>
      <CustomHeader isBack heading="Game Rates" />
      <ContainerWithoutScroll>
        <Timeline
          // style={styles.list}
          data={howToPlayData}
          separator={true}
          circleSize={20}
          circleColor="rgb(45,156,219)"
          lineColor="rgb(45,156,219)"
          timeContainerStyle={playStyle.timeStyle}
          timeStyle={playStyle.timeStyle}
          descriptionStyle={playStyle.descriptionStyle}
          circleStyle={playStyle.circleStyle}
          listViewContainerStyle={playStyle.listViewContainerStyle}
          titleStyle={playStyle.titleStyle}
          // isUsingFlatlist
        />
      </ContainerWithoutScroll>
    </>
  );
};

export default HowToPlay;
