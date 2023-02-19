import React from 'react';
import {View} from 'react-native';
import CustomHeader from 'src/components/header/CustomHeader';
import CustomModal from 'src/components/modal/CustomModal';
import {padding} from 'src/constants/globalStyles';
import Container from 'src/container/Container';
import {BottomStackProps} from 'src/routes/types/navigation';
import Deposit from './deposit/Deposit';
import homeStyle from './home.style';
import MarketItem from './marketItem/MarketItem';
import useHome from './useHome';

const Home = ({}: BottomStackProps) => {
  const {
    isLoading,
    marketData,
    sendRequest,
    onPlayNowPress,
    onOpenPress,
    onClosePress,
    onCancel,
    currIndex,
  } = useHome();

  return (
    <>
      <CustomHeader leftSmallTitle="Welcome to" leftTitle="DCT" />
      <Container
        onRefresh={sendRequest}
        refreshLoading={marketData?.length > 0 && isLoading}
        contentContainerStyle={padding(0, 100, 20, 20)}
        containerLoading={!marketData?.length && isLoading}>
        <Deposit />
        <View style={homeStyle.marketList}>
          {marketData?.map((el, index) => (
            <MarketItem
              onPlayNowPress={() => onPlayNowPress(index)}
              item={el}
              key={index}
            />
          ))}
        </View>
      </Container>
      <CustomModal
        isVisible={currIndex !== null}
        modalType="MarketModal"
        header={marketData[currIndex]?.name}
        onCancel={onCancel}
        onClosePress={onClosePress}
        onOpenPress={onOpenPress}
      />
    </>
  );
};

export default Home;
