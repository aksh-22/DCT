import React from 'react';
import Timeline from 'react-native-timeline-flatlist';
import CustomText from 'src/components/CustomText';
import CustomTimeline from 'src/components/timeline/CustomTimeline';
import ContainerWithoutScroll from 'src/container/ContainerWithoutScroll';

const data = [
  {title: 'Pillip Baptista', amount: '1000.00', date: '26 Jan 2023'},
  {title: 'Pillip Baptista', amount: '1000.00', date: '26 Jan 2023'},
  {title: 'Pillip Baptista', amount: '1000.00', date: '26 Jan 2023'},
  {title: 'Pillip Baptista', amount: '1000.00', date: '26 Jan 2023'},
];

const Pending = () => {
  return (
    <ContainerWithoutScroll>
      <CustomTimeline data={data} />
    </ContainerWithoutScroll>
  );
};

export default Pending;
