import React from 'react';
import {TouchableOpacity} from 'react-native';
import Person from 'src/assets/svg/person.svg';
import Lock from 'src/assets/svg/lock.svg';
import Name from 'src/assets/svg/name.svg';
import Mobile from 'src/assets/svg/mobile.svg';
import Password from 'src/assets/svg/password.svg';
import {customFontFamilyType} from 'typings/icon-family-tyoe';

type Props = {
  onPress?: () => void;
  name?: customFontFamilyType;
};

const CustomIcon = ({onPress, name}: Props) => {
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

    default:
      break;
  }

  return (
    <TouchableOpacity disabled={!onPress} onPress={onPress}>
      <Icon />
    </TouchableOpacity>
  );
};

export default CustomIcon;
