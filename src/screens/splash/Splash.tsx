import React from 'react';
import Logo from 'src/assets/svg/logo.svg';
import globalStyles from 'src/constants/globalStyles';
import ContainerWithoutScroll from 'src/container/ContainerWithoutScroll';

const Splash = () => {
  return (
    <ContainerWithoutScroll style={globalStyles.container_center}>
      <Logo style={globalStyles.zIndex_1} />
    </ContainerWithoutScroll>
  );
};

export default Splash;
