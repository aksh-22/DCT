import React from 'react';
import {useDispatch} from 'react-redux';
import CustomButton from 'src/components/button/CustomButton';
import Container from 'src/container/Container';
import {setIsLoggedIn} from 'src/store/reducer/userReducer';

type Props = {};

const More = ({}: Props) => {
  const dispatch = useDispatch();

  const onPress = () => {
    dispatch(setIsLoggedIn(false));
  };

  return (
    <Container>
      <CustomButton title="logout" onPress={onPress} />
    </Container>
  );
};

export default More;
