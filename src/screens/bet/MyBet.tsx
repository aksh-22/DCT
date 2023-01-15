import React from 'react';
import CustomText from 'src/components/CustomText';
import ContainerWithoutScroll from 'src/container/ContainerWithoutScroll';

type Props = {};

const MyBet = ({}: Props) => {
  return (
    <ContainerWithoutScroll
      style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
      <CustomText size={30}>Coming soon</CustomText>
    </ContainerWithoutScroll>
  );
};

export default MyBet;
