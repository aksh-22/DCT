import React from 'react';
import CustomHeader from 'src/components/header/CustomHeader';
import {useRequest} from 'src/constants/useRequest';
import Container from 'src/container/Container';
import {gameDataType} from 'typings/game-type';
import ListItem from './ListItem';
import useGameList from './useGameList';

type Props = {};

const GameList = ({}: Props) => {
  const {isLoading, jodi, panel, single} = useGameList();

  return (
    <>
      <CustomHeader heading="Capital morning" isBack showBell={false} status />
      <Container containerLoading={isLoading}>
        <ListItem title="Single Aankda" items={single} />
        <ListItem title="Play Jodi" items={jodi} />
        <ListItem title="Play Patti" items={panel} />
      </Container>
    </>
  );
};

export default GameList;
