/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Image, TouchableOpacity, View} from 'react-native';
import CustomText from 'src/components/CustomText';
import SvgBackground from 'src/components/SvgBackground';
import {margin} from 'src/constants/globalStyles';
import listStyle from './list.style';

type Props = {
  items: any[];
  title: string;
  icon: ('single' | 'jodi' | 's_panel' | 'd_panel' | 't_panel' | 'c_panel') &
    any;
  onGamePress: () => void;
};

const images = {
  single: {
    path: require('src/assets/img/single.png'),
    size: 40,
  },
  jodi: {
    path: require('src/assets/img/jodi.png'),
    size: 50,
  },
  panel: {
    path: require('src/assets/img/single.png'),
    size: 40,
  },
};

const ListItem = ({items, title, icon, onGamePress}: Props) => {
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
            }}>
            <View style={listStyle.iconWrapper}>
              <Image
                resizeMode="contain"
                source={images[icon].path}
                style={[
                  listStyle.icon,
                  {height: images[icon].size, width: images[icon].size},
                ]}
              />
            </View>
            <SvgBackground marginTop={0} key={i} bg="gameWrapper" />
            <CustomText numberOfLines={1} style={{width: 80}}>
              {el.name}
            </CustomText>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default ListItem;
