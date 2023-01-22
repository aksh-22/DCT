import React from 'react';
import {View} from 'react-native';
import {useDispatch} from 'react-redux';
import CustomHeader from 'src/components/header/CustomHeader';
import moreList from 'src/constants/moreList';
import Container from 'src/container/Container';
import {BottomStackProps} from 'src/routes/types/navigation';
import {setIsLoggedIn} from 'src/store/reducer/userReducer';
import moreStyle from './more.style';
import MoreItem from './MoreItem';
import Share from 'react-native-share';

const More = ({navigation}: BottomStackProps) => {
  const dispatch = useDispatch();

  const onPress = (key: any, route: any) => {
    switch (key) {
      case 'logout':
        dispatch(setIsLoggedIn(false));
        break;

      case 'share':
        // Share.Sheet();
        break;

      default:
        navigation.navigate(route);
        break;
    }
  };

  return (
    <Container>
      <CustomHeader heading="More" />
      <View style={moreStyle.listArea}>
        {moreList.map(el => (
          <MoreItem item={el} key={el.id} onPress={onPress} />
        ))}
      </View>
    </Container>
  );
};

export default More;
