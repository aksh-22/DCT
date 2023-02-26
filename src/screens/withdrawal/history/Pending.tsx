import React from 'react';
import CustomTimeline from 'src/components/timeline/CustomTimeline';
import ContainerWithoutScroll from 'src/container/ContainerWithoutScroll';
import useHistory from './useHistory';

const Pending = () => {
  const {data, isLoading} = useHistory();

  return (
    <ContainerWithoutScroll containerLoading={isLoading}>
      <CustomTimeline data={data} />
    </ContainerWithoutScroll>
  );
};

export default Pending;
