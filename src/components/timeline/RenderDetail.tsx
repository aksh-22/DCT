/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View} from 'react-native';
import CustomText from '../CustomText';
import timelineStyle from './timeline.style';

import Circle from 'src/assets/svg/timeline-circle.svg';

type Props = {
  data: any;
  index: number;
};

const RenderDetail = ({data, index}: Props) => {
  const isEven = index % 2 === 0;

  return (
    <View style={timelineStyle.row}>
      <View style={[timelineStyle.rowItem, {borderRightWidth: isEven ? 1 : 0}]}>
        {isEven ? (
          <>
            <View>
              <CustomText
                size={18}
                style={{textAlign: isEven ? 'right' : 'left'}}>
                {data.title}
              </CustomText>
              <CustomText
                size={13}
                style={{opacity: 0.7, textAlign: isEven ? 'right' : 'left'}}>
                {data.amount}
              </CustomText>
              <CustomText
                size={13}
                style={{opacity: 0.7, textAlign: isEven ? 'right' : 'left'}}>
                {data.created_at}
              </CustomText>
            </View>
            <Circle style={[timelineStyle.circleStyle]} />
          </>
        ) : (
          ''
        )}
      </View>
      <View style={[timelineStyle.rowItem, {borderLeftWidth: !isEven ? 1 : 0}]}>
        {!isEven ? (
          <>
            <View>
              <CustomText
                size={18}
                // style={{textAlign: isEven ? 'right' : 'left'}}
              >
                {data.title}
              </CustomText>
              <CustomText size={13} style={{opacity: 0.7}}>
                {data.amount}
              </CustomText>
              <CustomText size={13} style={{opacity: 0.7}}>
                {data.created_at}
              </CustomText>
            </View>
            <Circle style={[timelineStyle.rightCircleStyle]} />
          </>
        ) : (
          ''
        )}
      </View>
    </View>
  );
};

export default RenderDetail;
