import React from 'react';
import CustomTimeline from 'src/components/timeline/CustomTimeline';
import ContainerWithoutScroll from 'src/container/ContainerWithoutScroll';
import useHistory from './useHistory';

const Approved = () => {
  const {data, isLoading} = useHistory({type: 'completed'});

  return (
    <ContainerWithoutScroll containerLoading={isLoading}>
      <CustomTimeline data={data} />
    </ContainerWithoutScroll>
  );
};

export default Approved;
