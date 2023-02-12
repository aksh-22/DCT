import React from 'react';
import {ActivityIndicator, View} from 'react-native';
import colors from 'src/constants/colors';
import globalStyles from 'src/constants/globalStyles';

const LoadingContainer = () => {
  return (
    <View style={globalStyles.container_center}>
      <ActivityIndicator size={'large'} color={colors.defaultWhite} />
    </View>
  );
};

export default LoadingContainer;
