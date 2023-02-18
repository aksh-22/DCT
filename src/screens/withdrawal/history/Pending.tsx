import React from 'react';
import CustomTimeline from 'src/components/timeline/CustomTimeline';
import ContainerWithoutScroll from 'src/container/ContainerWithoutScroll';

const data = [
  {title: 'Pillip Baptista', amount: '1000.00', date: '26 Jan 2023'},
  {title: 'Emery Rosser', amount: '1000.00', date: '26 Jan 2023'},
  {title: 'Craig Franci', amount: '1000.00', date: '26 Jan 2023'},
  {title: 'Alfonso Botosh', amount: '1000.00', date: '26 Jan 2023'},
  {title: 'Emerson Herwitz', amount: '1000.00', date: '26 Jan 2023'},
  {title: 'Pillip Baptista', amount: '1000.00', date: '26 Jan 2023'},
  {title: 'Emery Rosser', amount: '1000.00', date: '26 Jan 2023'},
  {title: 'Craig Franci', amount: '1000.00', date: '26 Jan 2023'},
  {title: 'Alfonso Botosh', amount: '1000.00', date: '26 Jan 2023'},
  {title: 'Emerson Herwitz', amount: '1000.00', date: '26 Jan 2023'},
  {title: 'Pillip Baptista', amount: '1000.00', date: '26 Jan 2023'},
  {title: 'Emery Rosser', amount: '1000.00', date: '26 Jan 2023'},
  {title: 'Craig Franci', amount: '1000.00', date: '26 Jan 2023'},
  {title: 'Alfonso Botosh', amount: '1000.00', date: '26 Jan 2023'},
  {title: 'Emerson Herwitz', amount: '1000.00', date: '26 Jan 2023'},
];

const Pending = () => {
  return (
    <ContainerWithoutScroll>
      <CustomTimeline data={data} />
    </ContainerWithoutScroll>
  );
};

export default Pending;
