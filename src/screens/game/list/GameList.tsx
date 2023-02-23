import React from 'react';
import CustomHeader from 'src/components/header/CustomHeader';
import Container from 'src/container/Container';
import ListItem from './ListItem';
import useGameList from './useGameList';

type Props = {};

const GameList = ({}: Props) => {
  const {isLoading, jodi, panel, single} = useGameList();

  return (
    <>
      <CustomHeader heading="Capital morning" isBack showBell={false} status />
      <Container containerLoading={isLoading}>
        <ListItem icon="single" title="Single Aankda" items={single} />
        <ListItem icon="jodi" title="Play Jodi" items={jodi} />
        <ListItem icon="panel" title="Play Patti" items={panel} />
      </Container>
    </>
  );
};

export default GameList;
