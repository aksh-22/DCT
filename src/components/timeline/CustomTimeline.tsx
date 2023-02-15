import React from 'react';
import {FlatList, View} from 'react-native';
import Timeline from 'react-native-timeline-flatlist';
import Circle from 'src/assets/svg/timeline-circle.svg';
import colors from 'src/constants/colors';
import RenderDetail from './RenderDetail';
import timelineStyle from './timeline.style';

type Props = {
  data: any;
};

const CustomTimeline = ({data}: Props) => {
  const renderItem = ({item, index}) => {
    return <RenderDetail data={item} index={index} />;
  };

  return (
    // <Timeline
    //   data={data}
    //   columnFormat="two-column"
    //   // isUsingFlatlist
    //   renderCircle={() => <Circle style={timelineStyle.circleStyle} />}
    //   renderDetail={(item, i, b) => {
    //     console.log('a', i, b);
    //     return <RenderDetail data={item} index={i} />;
    //   }}
    //   lineColor={colors.active}
    //   listViewContainerStyle={{paddingBottom: 100, justifyContent: 'center'}}
    //   lineWidth
    //   // style={{marginBottom: 100}}
    // />
    <FlatList
      renderItem={renderItem}
      data={data}
      contentContainerStyle={{
        width: '100%',
        alignSelf: 'center',
      }}
    />
  );
};

export default CustomTimeline;
