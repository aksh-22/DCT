import React, {useState} from 'react';
import {ActivityIndicator, View} from 'react-native';
import CustomButton from 'src/components/button/CustomButton';
import CustomHeader from 'src/components/header/CustomHeader';
import colors from 'src/constants/colors';
import {useRequest} from 'src/constants/useRequest';
import Container from 'src/container/Container';
import {BottomStackProps} from 'src/routes/types/navigation';
import {marketDataType} from 'typings/market-data-type';
import globalStyles from 'src/constants/globalStyles';
import Deposit from './Deposit';
import homeStyle from './home.style';
import MarketItem from './MarketItem';

const Home = ({}: BottomStackProps) => {
  const [markets, setMarkets] = useState<marketDataType>(null);

  const onMarketFetchSuccess = data => {
    setMarkets(data.data);
  };

  const {isLoading} = useRequest({
    endpoint: 'markets',
    onSuccess: onMarketFetchSuccess,
    callApiByDefault: true,
  });

  return (
    <>
      <CustomHeader heading="DCT" />
      <Container contentContainerStyle={homeStyle.container}>
        <CustomButton
          disabled
          title="Welcome To DCT"
          style={homeStyle.welcomeBox}
        />
        {isLoading ? (
          <View style={globalStyles.container_center}>
            <ActivityIndicator size={'large'} color={colors.buttonColor1} />
          </View>
        ) : (
          <>
            <Deposit customText={markets.custom_text} />
            <View style={homeStyle.marketList}>
              {markets?.markets?.map((el, index) => (
                <MarketItem item={el} key={index} />
              ))}
            </View>
          </>
        )}
      </Container>
    </>
  );
};

export default Home;
