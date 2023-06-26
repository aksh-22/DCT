import dayjs from 'dayjs';
import React from 'react';
import {View} from 'react-native';
import CustomText from 'src/components/CustomText';
import {padding} from 'src/constants/globalStyles';

type Props = {
  params: any;
};

const DetailBox = ({params}: Props) => {
  return (
    <View>
      <CustomText size={20}>{params?.name}</CustomText>
      <CustomText color="active" style={padding(5)}>
        {dayjs().format('DD MMM YYYY')}
      </CustomText>
    </View>
  );
};

export default DetailBox;
