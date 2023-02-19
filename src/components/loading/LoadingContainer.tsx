import React from 'react';
import {ActivityIndicator, View, ViewStyle} from 'react-native';
import colors from 'src/constants/colors';
import globalStyles from 'src/constants/globalStyles';

type Props = {
  containerSTyle?: ViewStyle;
};

const LoadingContainer = ({containerSTyle}: Props) => {
  return (
    <View style={[globalStyles.container_center, containerSTyle]}>
      <ActivityIndicator size={'large'} color={colors.defaultWhite} />
    </View>
  );
};

export default LoadingContainer;
