import React from 'react';
import CustomHeader from 'src/components/header/CustomHeader';
import SvgBackground from 'src/components/SvgBackground';
import {useRequest} from 'src/constants/useRequest';
import Container from 'src/container/Container';
import {gameDataType} from 'typings/game-type';

type Props = {};

const GameList = ({}: Props) => {
  const {dataFetched, isLoading} = useRequest({
    endpoint: 'game-types',
    callApiByDefault: true,
  });

  let gametypes: gameDataType[] = [];

  if (dataFetched?.data) {
    gametypes = dataFetched?.data?.gametypes;
    console.log('dataFetched', JSON.stringify(gametypes, null, 2));
  }

  return (
    <>
      <CustomHeader isBack showBell={false} />
      <Container>
        {gametypes.map(el => (
          <SvgBackground key={el.id}>{el.name}</SvgBackground>
        ))}
      </Container>
    </>
  );
};

export default GameList;
