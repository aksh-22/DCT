import React from 'react';
import {FlatList} from 'react-native';
import CustomHeader from 'src/components/header/CustomHeader';
import ContainerWithoutScroll from 'src/container/ContainerWithoutScroll';
import LabelRow from './LabelRow';
import ItemRow from './ItemRow';
import {padding} from 'src/constants/globalStyles';

type Props = {};

const data = [
  {
    sNo: 1,
    transactionType: 'Credit',
    amount: 1200,
    description: 'Winning Point Added',
    date: '26 Jan 2023',
    time: '22:49:59',
  },
  {
    sNo: 2,
    transactionType: 'Credit',
    amount: 1200,
    description: 'Winning Point Added',
    date: '26 Jan 2023',
    time: '22:49:59',
  },
  {
    sNo: 1,
    transactionType: 'Credit',
    amount: 1200,
    description: 'Winning Point Added',
    date: '26 Jan 2023',
    time: '22:49:59',
  },
  {
    sNo: 3,
    transactionType: 'Credit',
    amount: 1200,
    description: 'Winning Point Added',
    date: '26 Jan 2023',
    time: '22:49:59',
  },
  {
    sNo: 4,
    transactionType: 'Credit',
    amount: 1200,
    description: 'Winning Point Added',
    date: '26 Jan 2023',
    time: '22:49:59',
  },
  {
    sNo: 5,
    transactionType: 'Credit',
    amount: 1200,
    description: 'Winning Point Added',
    date: '26 Jan 2023',
    time: '22:49:59',
  },
  {
    sNo: 6,
    transactionType: 'Credit',
    amount: 1200,
    description: 'Winning Point Added',
    date: '26 Jan 2023',
    time: '22:49:59',
  },
  {
    sNo: 1,
    transactionType: 'Credit',
    amount: 1200,
    description: 'Winning Point Added',
    date: '26 Jan 2023',
    time: '22:49:59',
  },
];

const WalletHistory = ({}: Props) => {
  const renderItem = ({item, index}) => <ItemRow index={index} item={item} />;

  return (
    <>
      <CustomHeader leftTitle="Wallet History" showBell={false} />
      <ContainerWithoutScroll style={padding('0', '10')}>
        <LabelRow />
        <FlatList data={data} renderItem={renderItem} />
      </ContainerWithoutScroll>
    </>
  );
};

export default WalletHistory;
