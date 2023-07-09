import React from 'react';
import {FlatList, View} from 'react-native';
import CustomText from '../CustomText';
import RenderDetail from './RenderDetail';
import timelineStyle from './timeline.style';

type Props = {
  data: any;
  onRefresh: () => void;
  onEndReached: () => void;
  refreshing: boolean;
};

const CustomTimeline = ({data, onRefresh, refreshing, onEndReached}: Props) => {
  const renderItem = ({item, index}) => {
    return <RenderDetail data={item} index={index} />;
  };

  return (
    <FlatList
      onEndReached={onEndReached}
      onRefresh={onRefresh}
      refreshing={refreshing}
      renderItem={renderItem}
      data={data}
      contentContainerStyle={timelineStyle.timelineStyle}
      showsVerticalScrollIndicator={false}
      ListEmptyComponent={
        <View>
          <CustomText size={30} center>
            No data found
          </CustomText>
        </View>
      }
    />
  );
};

export default CustomTimeline;
