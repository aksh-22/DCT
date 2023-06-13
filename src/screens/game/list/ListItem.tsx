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
  icon: (
    | 'single_ankda'
    | 'single_ank_dp_panel'
    | 'half_jack'
    | 'red_family_jodi'
    | 'family_jodi'
    | 'single_ank_sp_panel'
    | 'red_jodi'
    | 'cycle_panel'
    | 'jodi'
    | 's_p_panel'
    | 'family_panel'
    | 't_p_panel'
    | 'd_p_panel'
    | 'full_jack'
  ) &
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
                source={getImage(el?.slug)}
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
