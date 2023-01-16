import React from 'react';
import CustomText from 'src/components/CustomText';
import CustomHeader from 'src/components/header/CustomHeader';
import ContainerWithoutScroll from 'src/container/ContainerWithoutScroll';

const WalletHistory = () => {
  return (
    <>
      <CustomHeader heading="Wallet History" isBack />
      <ContainerWithoutScroll
        style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
        <CustomText size={30}>Coming soon</CustomText>
      </ContainerWithoutScroll>
    </>
  );
};

export default WalletHistory;