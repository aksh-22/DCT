import React from 'react';
import {FlatList} from 'react-native';
import CustomHeader from 'src/components/header/CustomHeader';
import ContainerWithoutScroll from 'src/container/ContainerWithoutScroll';
import LabelRow from './LabelRow';
import ItemRow from './ItemRow';
import {padding} from 'src/constants/globalStyles';
import useWalletHistory from './useWalletHistory';
import LoadingContainer from 'src/components/loading/LoadingContainer';

type Props = {};

const WalletHistory = ({}: Props) => {
  const {data, isLoading, onEndReached, onRefresh} = useWalletHistory();

  const renderItem = ({item, index}) => <ItemRow index={index} item={item} />;

  return (
    <>
      <CustomHeader leftTitle="Wallet History" showBell={false} />
      <ContainerWithoutScroll style={padding('0', '10')}>
        <LabelRow />
        <FlatList
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={isLoading && <LoadingContainer />}
          refreshing={!!data?.length && isLoading}
          onRefresh={onRefresh}
          onEndReached={onEndReached}
          data={data}
          renderItem={renderItem}
        />
      </ContainerWithoutScroll>
    </>
  );
};

export default WalletHistory;
