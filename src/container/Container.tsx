/* eslint-disable react-native/no-inline-styles */
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React, {ReactNode} from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  RefreshControl,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StatusBarStyle,
  StyleSheet,
  ViewStyle,
} from 'react-native';
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
  KeyboardAvoidingViewProps?: any;
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
  KeyboardAvoidingViewProps,
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
        {...KeyboardAvoidingViewProps}
        //
      >
        <ScrollView
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
        </ScrollView>
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
