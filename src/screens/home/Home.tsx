import React from 'react';
import {View} from 'react-native';
import {useDispatch} from 'react-redux';
import CustomButton from 'src/components/button/CustomButton';
import {setIsLoggedIn} from 'src/store/reducer/userReducer';

type Props = {};

const Home = ({}: Props) => {
  const dispatch = useDispatch();

  const onPress = () => {
    dispatch(setIsLoggedIn(false));
  };

  return (
    <View style={{flex: 1, justifyContent: 'center', padding: 20}}>
      <CustomButton title="logout" onPress={onPress} />
    </View>
  );
};

export default Home;
