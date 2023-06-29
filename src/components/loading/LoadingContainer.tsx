import React from 'react';
import {ActivityIndicator, View, ViewStyle} from 'react-native';
import colors from 'src/constants/colors';
import globalStyles from 'src/constants/globalStyles';

type Props = {
  containerSTyle?: ViewStyle;
  height?: number;
};

const LoadingContainer = ({containerSTyle, height}: Props) => {
  return (
    <View style={[globalStyles.container_center, {height}, containerSTyle]}>
      <ActivityIndicator size={'large'} color={colors.defaultWhite} />
    </View>
  );
};

export default LoadingContainer;
