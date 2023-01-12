import {View, Text} from 'react-native';
import React from 'react';
import {setIsLoggedIn} from 'src/store/reducer/userReducer';
import {useDispatch} from 'react-redux';
import CustomButton from 'src/components/button/CustomButton';

type Props = {};

const More = ({}: Props) => {
  const dispatch = useDispatch();

  const onPress = () => {
    dispatch(setIsLoggedIn(false));
  };

  return (
    <View>
      <CustomButton title="logout" onPress={onPress} />
    </View>
  );
};

export default More;
