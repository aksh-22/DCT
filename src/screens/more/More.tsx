import React from 'react';
import {View} from 'react-native';
import Share from 'react-native-share';
import {useDispatch} from 'react-redux';
import CustomButton from 'src/components/button/CustomButton';
import CustomHeader from 'src/components/header/CustomHeader';
import {showMessage} from 'src/components/MessageModal';
import {margin} from 'src/constants/globalStyles';
import moreList from 'src/constants/moreList';
import {useRequest} from 'src/constants/useRequest';
import Container from 'src/container/Container';
import {BottomStackProps} from 'src/routes/types/navigation';
import {useAppSelector} from 'src/utils/reducer';
import moreStyle from './more.style';
import MoreItem from './MoreItem';

const More = ({navigation}: BottomStackProps) => {
  const message = useAppSelector(state => state.userReducer.shareLink);

  const dispatch = useDispatch();

  const onLogOutSuccess = () => {
    dispatch({type: 'CLEAR_REDUX'});
  };

  const onLogoutPress = () => {
    showMessage({
      message: 'Are you sure!?',
      otherActionOnClose: false,
      onPress: () => sendRequest(),
    });
  };

  const {sendRequest, isLoading} = useRequest({
    endpoint: 'auth/logout',
    onFinally: onLogOutSuccess,
  });

  const onPress = (key: any, route: any) => {
    switch (key) {
      case 'share':
        Share.open({message});
        break;

      default:
        navigation.navigate(route);
        break;
    }
  };

  return (
    <Container>
      <CustomHeader leftTitle="More" />
      <View style={moreStyle.listArea}>
        {moreList.map(el => (
          <MoreItem item={el} key={el.id} onPress={onPress} />
        ))}
        <CustomButton
          onPress={onLogoutPress}
          isLoading={isLoading}
          width="90%"
          title="Logout"
          style={margin(60)}
        />
      </View>
    </Container>
  );
};

export default More;
