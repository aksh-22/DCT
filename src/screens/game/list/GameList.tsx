import React from 'react';
import {Text} from 'react-native';
import CustomHeader from 'src/components/header/CustomHeader';
import Container from 'src/container/Container';

type Props = {};

const GameList = ({}: Props) => {
  return (
    <>
      <CustomHeader isBack showBell={false} />
      <Container>
        <Text>GameList</Text>
      </Container>
    </>
  );
};

export default GameList;
