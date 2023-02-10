import React from 'react';
import {TouchableOpacity} from 'react-native';
import Person from 'src/assets/svg/person.svg';
import Lock from 'src/assets/svg/lock.svg';
import Name from 'src/assets/svg/name.svg';
import Mobile from 'src/assets/svg/mobile.svg';
import Password from 'src/assets/svg/password.svg';
import Home from 'src/assets/svg/home.svg';
import MyBet from 'src/assets/svg/myBet.svg';
import Withdrawal from 'src/assets/svg/withdrawal.svg';
import {customFontFamilyType} from 'typings/icon-family-tyoe';
import {SvgProps} from 'react-native-svg';

interface Props extends SvgProps {
  onPress?: () => void;
  name?: customFontFamilyType;
}

const CustomIcon = ({onPress, name, ...rest}: Props) => {
  let Icon;

  switch (name) {
    case 'person':
      Icon = Person;
      break;

    case 'lock':
      Icon = Lock;
      break;

    case 'name':
      Icon = Name;
      break;

    case 'mobile':
      Icon = Mobile;
      break;

    case 'password':
      Icon = Password;
      break;

    case 'home':
      Icon = Home;
      break;

    case 'my-bet':
      Icon = MyBet;
      break;

    case 'withdrawal':
      Icon = Withdrawal;
      break;

    default:
      break;
  }

  return (
    <TouchableOpacity disabled={!onPress} onPress={onPress}>
      <Icon {...rest} />
    </TouchableOpacity>
  );
};

export default CustomIcon;
