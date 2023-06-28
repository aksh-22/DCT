import React from 'react';
import {View} from 'react-native';
import CustomHeader from 'src/components/header/CustomHeader';
import CustomModal from 'src/components/modal/CustomModal';
import MarketModal from 'src/components/modal/MarketModal';
import {padding} from 'src/constants/globalStyles';
import Container from 'src/container/Container';
import {BottomStackProps} from 'src/routes/types/navigation';
import Deposit from './deposit/Deposit';
import homeStyle from './home.style';
import MarketItem from './marketItem/MarketItem';
import useHome from './useHome';

const Home = ({navigation}: BottomStackProps) => {
  const {
    isLoading,
    marketData,
    sendRequest,
    onPlayNowPress,
    onCancel,
    currIndex,
    whatsapp,
    mobile,
  } = useHome({navigate: navigation.navigate});

  return (
    <>
      <CustomHeader leftSmallTitle="Welcome to" leftTitle="DCT" />
      <Container
        onRefresh={sendRequest}
        refreshLoading={marketData?.length > 0 && isLoading}
        contentContainerStyle={padding(0, 100, 20, 20)}
        containerLoading={!marketData?.length && isLoading}>
        <Deposit mobile={mobile} whatsapp={whatsapp} />
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
        header={marketData[currIndex]?.name}>
        <MarketModal onCancel={onCancel} data={marketData[currIndex]} />
      </CustomModal>
    </>
  );
};

export default Home;
