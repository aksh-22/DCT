import {View, Text} from 'react-native';
import React from 'react';
import Timeline from 'react-native-timeline-flatlist';
import RenderDetail from './RenderDetail';
import Circle from 'src/assets/svg/timeline-circle.svg';
import colors from 'src/constants/colors';
import {SCREEN_WIDTH} from 'src/constants/deviceInfo';
import timelineStyle from './timeline.style';

type Props = {
  data: any;
};

const CustomTimeline = ({data}: Props) => {
  return (
    <Timeline
      data={data}
      columnFormat="two-column"
      // isUsingFlatlist
      renderCircle={() => <Circle style={timelineStyle.circleStyle} />}
      // renderDetail={(data, a, b) => {
      //   console.log('a', a, b);
      //   return <RenderDetail data={data} />;
      // }}
      listViewContainerStyle={{paddingBottom: 100, justifyContent: 'center'}}
      // style={{marginBottom: 100}}
    />
  );
};

export default CustomTimeline;
