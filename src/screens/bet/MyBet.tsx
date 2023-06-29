import React from 'react';
import {FlatList} from 'react-native';
import CustomHeader from 'src/components/header/CustomHeader';
import {padding} from 'src/constants/globalStyles';
import ContainerWithoutScroll from 'src/container/ContainerWithoutScroll';
import BetItem from './BetItem';
import useMyBest from './useMyBest';
import LoadingContainer from 'src/components/loading/LoadingContainer';
import {SCREEN_HEIGHT} from 'src/constants/deviceInfo';

type Props = {};

const MyBet = ({}: Props) => {
  const {isLoading, bidData, onRefresh} = useMyBest();
  return (
    <>
      <CustomHeader leftTitle="My Bet" />
      <ContainerWithoutScroll>
        <FlatList
          onRefresh={onRefresh}
          refreshing={isLoading && !!bidData?.length}
          ListEmptyComponent={
            isLoading && <LoadingContainer height={SCREEN_HEIGHT * 0.8} />
          }
          ListFooterComponent={
            isLoading && !!bidData?.length && <LoadingContainer />
          }
          contentContainerStyle={padding(0, 100, 20, 20)}
          data={bidData}
          // renderItem={() => <BetItem />}
          renderItem={BetItem}
          showsVerticalScrollIndicator={false}
        />
      </ContainerWithoutScroll>
    </>
  );
};

export default MyBet;
