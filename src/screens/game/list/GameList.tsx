import React from 'react';
import CustomHeader from 'src/components/header/CustomHeader';
import Container from 'src/container/Container';
import ListItem from './ListItem';
import useGameList from './useGameList';

type Props = {
  navigation: any;
  route: any;
};

const GameList = ({navigation, route}: Props) => {
  const {isLoading, jodi, panel, single, onGamePress, sungum} = useGameList({
    navigation,
    route,
  });

  return (
    <>
      <CustomHeader heading="Capital morning" isBack showBell={false} status />
      <Container containerLoading={isLoading}>
        <ListItem
          onGamePress={onGamePress}
          title="Single Aankda"
          items={single}
        />
        <ListItem onGamePress={onGamePress} title="Play Jodi" items={jodi} />
        <ListItem onGamePress={onGamePress} title="Play Patti" items={panel} />
        <ListItem onGamePress={onGamePress} title="Sungum" items={sungum} />
      </Container>
    </>
  );
};

export default GameList;
