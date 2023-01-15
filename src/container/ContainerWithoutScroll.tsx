import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React, {ReactNode} from 'react';
import {
  Platform,
  SafeAreaView,
  StatusBar,
  StatusBarStyle,
  StyleSheet,
  View,
  ViewStyle,
} from 'react-native';
import colors from 'src/constants/colors';

type Props = {
  children: ReactNode;
  SafeAreaViewStyle?: ViewStyle;
  style?: ViewStyle;
  statusBarColor?: string;
  barStyle?: StatusBarStyle;
  showCartBar?: boolean;
};

const ContainerWithoutScroll = ({
  children,
  SafeAreaViewStyle,
  style,
  statusBarColor = colors.buttonColor1,
  barStyle = 'light-content',
}: Props) => {
  const {addListener} = useNavigation<NativeStackNavigationProp<any>>();

  React.useEffect(() => {
    const unsubscribe = addListener('focus', () => {
      // do something
      if (Platform.OS === 'android') {
        StatusBar.setBackgroundColor(statusBarColor);
        StatusBar.setBarStyle(barStyle);
      }
    });

    return unsubscribe;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [addListener]);

  return (
    <SafeAreaView style={[styles.SafeAreaView, SafeAreaViewStyle]}>
      <StatusBar backgroundColor={statusBarColor} barStyle={barStyle} />
      <View style={[styles.view, style]}>{children}</View>
    </SafeAreaView>
  );
};

export default ContainerWithoutScroll;

const styles = StyleSheet.create({
  view: {
    flex: 1,
    backgroundColor: colors.defaultWhite,
  },
  SafeAreaView: {
    flex: 1,
  },
});
