import React from 'react';
import {FlatList} from 'react-native';
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
    <FlatList
      renderItem={renderItem}
      data={data}
      contentContainerStyle={timelineStyle.timelineStyle}
      showsVerticalScrollIndicator={false}
    />
  );
};

export default CustomTimeline;
