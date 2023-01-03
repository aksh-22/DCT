import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React, {ReactNode} from 'react';
import {
  Platform,
  RefreshControl,
  SafeAreaView,
  StatusBar,
  StatusBarStyle,
  StyleSheet,
  ViewStyle,
} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import colors from 'src/constants/colors';

type Props = {
  children: ReactNode;
  SafeAreaViewStyle?: ViewStyle;
  style?: ViewStyle;
  contentContainerStyle?: ViewStyle;
  statusBarColor?: string;
  barStyle?: StatusBarStyle;
  onRefresh?: () => void;
  refreshLoading?: boolean;
  showCartBar?: boolean;
  backgroundColor?: string;
};

const Container = ({
  children,
  SafeAreaViewStyle,
  style,
  contentContainerStyle,
  statusBarColor = colors.defaultWhite,
  barStyle = 'dark-content',
  onRefresh,
  refreshLoading,
  backgroundColor = colors.defaultWhite,
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
      <KeyboardAwareScrollView
        keyboardShouldPersistTaps="handled"
        bounces={!!onRefresh}
        refreshControl={
          onRefresh && (
            <RefreshControl
              refreshing={refreshLoading}
              onRefresh={onRefresh}
              tintColor={colors.defaultWhite}
              title="Pull to refresh"
              titleColor={colors.defaultWhite}
            />
          )
        }
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[
          styles.contentContainerStyle,
          contentContainerStyle,
        ]}
        style={[styles.view, style, {backgroundColor}]}>
        {children}
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default Container;

const styles = StyleSheet.create({
  view: {
    flex: 1,
    backgroundColor: colors.defaultWhite,
  },
  contentContainerStyle: {
    flexGrow: 1,
    backgroundColor: 'red',
  },
  SafeAreaView: {
    flex: 1,
    backgroundColor: colors.defaultWhite,
  },
});
