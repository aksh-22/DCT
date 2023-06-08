import React from 'react';
import CustomHeader from 'src/components/header/CustomHeader';
import Container from 'src/container/Container';
import ListItem from './ListItem';
import useGameList from './useGameList';

type Props = {
  navigation: any;
};

const GameList = ({navigation}: Props) => {
  const {isLoading, jodi, panel, single, onGamePress} = useGameList({
    navigation,
  });

  return (
    <>
      <CustomHeader heading="Capital morning" isBack showBell={false} status />
      <Container containerLoading={isLoading}>
        <ListItem
          onGamePress={onGamePress}
          icon="single"
          title="Single Aankda"
          items={single}
        />
        <ListItem
          onGamePress={onGamePress}
          icon="jodi"
          title="Play Jodi"
          items={jodi}
        />
        <ListItem
          onGamePress={onGamePress}
          icon="panel"
          title="Play Patti"
          items={panel}
        />
      </Container>
    </>
  );
};

export default GameList;
