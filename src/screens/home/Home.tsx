import React from 'react';
import {useDispatch} from 'react-redux';
import CustomButton from 'src/components/button/CustomButton';
import CustomHeader from 'src/components/header/CustomHeader';
import Container from 'src/container/Container';
import {setIsLoggedIn} from 'src/store/reducer/userReducer';

type Props = {};

const Home = ({}: Props) => {
  const dispatch = useDispatch();

  const onPress = () => {
    dispatch(setIsLoggedIn(false));
  };

  return (
    <Container contentContainerStyle={{}}>
      <CustomHeader heading="DCT" />
      <CustomButton title="logout" onPress={onPress} />
    </Container>
  );
};

export default Home;
