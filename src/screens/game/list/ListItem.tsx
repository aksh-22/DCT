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
};

const ListItem = ({items, title}: Props) => {
  return (
    <View style={listStyle.item}>
      <View style={margin(10)}>
        <SvgBackground>{title}</SvgBackground>
      </View>
      <View style={listStyle.row}>
        {items.map((el, i) => (
          <TouchableOpacity
            style={{justifyContent: 'center', alignItems: 'center'}}>
            <SvgBackground marginTop={0} key={i} bg="gameWrapper">
              <SvgBackground bg="single" />
            </SvgBackground>
            <CustomText>{el.name}</CustomText>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default ListItem;
