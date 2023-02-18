import {View, Text, FlatList} from 'react-native';
import React from 'react';
import ContainerWithoutScroll from 'src/container/ContainerWithoutScroll';
import CustomHeader from 'src/components/header/CustomHeader';
import NotificationItem from './NotificationItem';
import {padding} from 'src/constants/globalStyles';

type Props = {};

const Notification = (props: Props) => {
  const renderItem = () => <NotificationItem />;

  return (
    <ContainerWithoutScroll>
      <CustomHeader
        isBack
        showWallet={false}
        showBell={false}
        heading="Notification"
      />
      <FlatList
        contentContainerStyle={padding('0', '20')}
        data={[1, 2, 3, 4]}
        renderItem={renderItem}
      />
    </ContainerWithoutScroll>
  );
};

export default Notification;
