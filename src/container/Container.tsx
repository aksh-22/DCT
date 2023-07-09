import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React, {ReactNode} from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  RefreshControl,
  SafeAreaView,
  StatusBar,
  StatusBarStyle,
  StyleSheet,
  ViewStyle,
} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import LoadingContainer from 'src/components/loading/LoadingContainer';
import colors from 'src/constants/colors';

type Props = {
  children: ReactNode;
  SafeAreaViewStyle?: ViewStyle;
  style?: ViewStyle;
  contentContainerStyle?: ViewStyle | ViewStyle[];
  statusBarColor?: string;
  barStyle?: StatusBarStyle;
  onRefresh?: () => void;
  refreshLoading?: boolean;
  backgroundColor?: string;
  containerLoading?: boolean;
};

const Container = ({
  children,
  SafeAreaViewStyle,
  style,
  contentContainerStyle,
  statusBarColor = colors.background,
  barStyle = 'light-content',
  onRefresh,
  refreshLoading,
  backgroundColor = colors.background,
  containerLoading,
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
      <KeyboardAvoidingView
        style={{flex: 1, backgroundColor: colors.background}}
        behavior="padding"
        keyboardVerticalOffset={45}>
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
          {containerLoading ? <LoadingContainer /> : children}
        </KeyboardAwareScrollView>
      </KeyboardAvoidingView>
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
  },
  SafeAreaView: {
    flex: 1,
    backgroundColor: colors.defaultWhite,
  },
});
