import React from 'react';
import CustomTimeline from 'src/components/timeline/CustomTimeline';
import ContainerWithoutScroll from 'src/container/ContainerWithoutScroll';
import useHistory from './useHistory';

const Pending = () => {
  const {data, isLoading, onRefresh, onEndReached} = useHistory();

  return (
    <ContainerWithoutScroll containerLoading={isLoading}>
      <CustomTimeline
        onEndReached={onEndReached}
        data={data}
        onRefresh={onRefresh}
        refreshing={!!data?.length && isLoading}
      />
    </ContainerWithoutScroll>
  );
};

export default Pending;
