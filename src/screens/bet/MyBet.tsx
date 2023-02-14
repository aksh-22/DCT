import React from 'react';
import {FlatList} from 'react-native';
import CustomHeader from 'src/components/header/CustomHeader';
import {padding} from 'src/constants/globalStyles';
import ContainerWithoutScroll from 'src/container/ContainerWithoutScroll';
import BetItem from './BetItem';

type Props = {};

const MyBet = ({}: Props) => {
  return (
    <>
      <CustomHeader leftTitle="My Bet" />
      <ContainerWithoutScroll>
        <FlatList
          contentContainerStyle={padding(0, 100, 20, 20)}
          data={Array(10).fill('')}
          // renderItem={() => <BetItem />}
          renderItem={BetItem}
          showsVerticalScrollIndicator={false}
        />
      </ContainerWithoutScroll>
    </>
  );
};

export default MyBet;
