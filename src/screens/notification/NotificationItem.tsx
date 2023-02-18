import React from 'react';
import {View} from 'react-native';
import CustomIcon from 'src/components/CustomIcon';
import CustomText from 'src/components/CustomText';
import globalStyles from 'src/constants/globalStyles';
import notificationStyle from './notification.style';

const NotificationItem = () => {
  return (
    <View style={notificationStyle.itemContainer}>
      <View style={notificationStyle.iconWrapper}>
        <CustomIcon height={20} width={20} name="bell" />
      </View>
      <View style={notificationStyle.topRow}>
        <View style={globalStyles.row_spaceBetween}>
          <CustomText size={15}>Lorem</CustomText>
          <CustomText size={12} color="purple">
            26 Jan 2023
          </CustomText>
        </View>
        <CustomText size={11} color="placeholderColor">
          Lorem ipsum dolor sit amet consectetur. Integer lorem habitant.
        </CustomText>
      </View>
    </View>
  );
};

export default NotificationItem;
