import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import CustomIcon from 'src/components/CustomIcon';
import CustomText from 'src/components/CustomText';
import colors from 'src/constants/colors';
import {customFontFamilyType} from 'typings/icon-family-tyoe';
import moreStyle from './more.style';

type Props = {
  item: {
    id: number;
    name: string;
    key: any;
    iconName: customFontFamilyType;
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
        <View style={moreStyle.iconWrapper}>
          <CustomIcon name={item.iconName} />
        </View>
        <CustomText style={moreStyle.text}>{item.name}</CustomText>
      </View>
      <CustomIcon name="right" color={colors.defaultWhite} />
    </TouchableOpacity>
  );
};

export default MoreItem;
