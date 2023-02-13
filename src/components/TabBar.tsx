/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import colors from 'src/constants/colors';
import {fonts} from 'src/constants/fonts';
import CustomText from './CustomText';

function MyTabBar({state, descriptors, navigation}) {
  return (
    <View style={styles.main}>
      <View style={styles.tabBarWrapper}>
        {state.routes.map((route, index) => {
          const {options} = descriptors[route.key];
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
              ? options.title
              : route.name;

          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              // The `merge: true` option makes sure that the params inside the tab screen are preserved
              navigation.navigate({name: route.name, merge: true});
            }
          };

          // const inputRange = state.routes.map((_, i) => i);
          // const opacity = position.interpolate({
          //   inputRange,
          //   outputRange: inputRange.map(i => (i === index ? 1 : 0)),
          // });

          return (
            <TouchableOpacity
              key={index}
              accessibilityRole="button"
              accessibilityState={isFocused ? {selected: true} : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              style={[
                styles.tabBarItem,
                {
                  backgroundColor: isFocused
                    ? colors.active
                    : colors.transparent,
                  paddingHorizontal: isFocused ? 8 : 0,
                },
              ]}>
              <CustomText size={12} center>
                {label}
              </CustomText>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    backgroundColor: colors.background,
  },
  tabBarWrapper: {
    flexDirection: 'row',
    backgroundColor: colors.background2,
    marginHorizontal: 10,
    paddingVertical: 5,
    paddingHorizontal: 6,
    borderRadius: 35,
    marginVertical: 10,
  },
  tabBarItem: {
    flex: 1,
    backgroundColor: colors.active,
    borderRadius: 35,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 8,
  },
  labelStyle: {
    fontFamily: fonts.regular,
    fontSize: 12,
    color: colors.defaultWhite,
  },
});

export default MyTabBar;
