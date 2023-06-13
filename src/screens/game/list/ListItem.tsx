/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Image, TouchableOpacity, View} from 'react-native';
import CustomText from 'src/components/CustomText';
import SvgBackground from 'src/components/SvgBackground';
import {margin} from 'src/constants/globalStyles';
import listStyle from './list.style';
import {getImage} from './getImage';

type Props = {
  items: any[];
  title: string;
  onGamePress: () => void;
};

const ListItem = ({items, title, onGamePress}: Props) => {
  return (
    <View style={listStyle.item}>
      <View style={margin(10)}>
        <SvgBackground>{title}</SvgBackground>
      </View>
      <View style={listStyle.row}>
        {items.map((el, i) => (
          <TouchableOpacity
            onPress={onGamePress}
            key={i}
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              marginHorizontal: 5,
              marginBottom: 20,
            }}>
            <View style={listStyle.iconWrapper}>
              <Image
                resizeMode="contain"
                source={getImage(el?.slug)}
                style={listStyle.icon}
              />
            </View>
            <SvgBackground marginTop={0} key={i} bg="gameWrapper" />
            <CustomText
              center
              style={{
                width: 80,
                textTransform: 'capitalize',
                alignSelf: 'center',
              }}>
              {el.name}
            </CustomText>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default ListItem;
