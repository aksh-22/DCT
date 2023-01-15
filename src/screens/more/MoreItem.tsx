import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import CustomText from 'src/components/CustomText';
import VectorIcon from 'src/components/IconsFamily';
import moreStyle from './more.style';

type Props = {
  item: {
    id: number;
    name: string;
    key: any;
    iconName: string;
    familyName?: any;
    route?: any;
  };
  onPress: (key: string, route: any) => void;
};

const MoreItem = ({item, onPress}: Props) => {
  return (
    <TouchableOpacity
      style={moreStyle.item}
      onPress={() => onPress(item.key, item.route)}>
      <View style={moreStyle.textArea}>
        <VectorIcon name={item.iconName} family={item.familyName} />
        <CustomText style={moreStyle.text}>{item.name}</CustomText>
      </View>
      <VectorIcon name="right" family="AntDesign" />
    </TouchableOpacity>
  );
};

export default MoreItem;
