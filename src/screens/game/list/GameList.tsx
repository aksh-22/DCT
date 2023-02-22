import React from 'react';
import CustomHeader from 'src/components/header/CustomHeader';
import {useRequest} from 'src/constants/useRequest';
import Container from 'src/container/Container';
import {gameDataType} from 'typings/game-type';
import ListItem from './ListItem';

type Props = {};

const GameList = ({}: Props) => {
  const {dataFetched, isLoading} = useRequest({
    endpoint: 'game-types',
    callApiByDefault: true,
  });

  let gametypes: gameDataType[] = [];

  if (dataFetched?.data) {
    gametypes = dataFetched?.data?.gametypes;
  }

  return (
    <>
      <CustomHeader isBack showBell={false} />
      <Container containerLoading={isLoading}>
        {gametypes.map(el => (
          <ListItem key={el.id} item={el} />
        ))}
      </Container>
    </>
  );
};

export default GameList;
