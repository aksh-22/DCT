import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import CustomIcon from 'src/components/CustomIcon';
import CustomText from 'src/components/CustomText';
import SvgBackground from 'src/components/SvgBackground';
import {margin} from 'src/constants/globalStyles';
import listStyle from './list.style';

type Props = {
  items: any[];
  title: string;
  icon: 'single' | 'jodi' | 'panel';
};

const ListItem = ({items, title, icon}: Props) => {
  return (
    <View style={listStyle.item}>
      <View style={margin(10)}>
        <SvgBackground>{title}</SvgBackground>
      </View>
      <View style={listStyle.row}>
        {items.map((el, i) => (
          <TouchableOpacity
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              marginHorizontal: 5,
            }}>
            <SvgBackground marginTop={0} key={i} bg="gameWrapper">
              <CustomIcon name={icon} />
            </SvgBackground>
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
