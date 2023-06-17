/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Image, TouchableOpacity, View} from 'react-native';
import CustomText from 'src/components/CustomText';
import SvgBackground from 'src/components/SvgBackground';
import {margin} from 'src/constants/globalStyles';
import listStyle from './list.style';
import {getGameData} from './getGameData';

type Props = {
  items: any[];
  title: string;
  onGamePress: (data: any) => void;
};

const ListItem = ({items, title, onGamePress}: Props) => {
  return (
    <View style={listStyle.item}>
      <View style={margin(10)}>
        <SvgBackground>{title}</SvgBackground>
      </View>
      <View style={listStyle.row}>
        {items.map((el, i) => {
          const {image, route} = getGameData(el?.slug) ?? {};
          return (
            <View style={margin(10)} key={el.id}>
              <TouchableOpacity
                onPress={onGamePress.bind(this, route)}
                style={{
                  marginHorizontal: 5,
                }}>
                <View style={listStyle.iconWrapper}>
                  <Image
                    resizeMode="contain"
                    source={image}
                    style={listStyle.icon}
                  />
                </View>
                <SvgBackground marginTop={0} key={i} bg="gameWrapper" />
              </TouchableOpacity>
              <CustomText
                center
                style={{
                  width: 80,
                  textTransform: 'capitalize',
                  alignSelf: 'center',
                }}>
                {el.name}
              </CustomText>
            </View>
          );
        })}
      </View>
    </View>
  );
};

export default ListItem;
