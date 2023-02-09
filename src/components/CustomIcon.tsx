import React from 'react';
import {TouchableOpacity} from 'react-native';
import Person from 'src/assets/svg/person.svg';
import Lock from 'src/assets/svg/lock.svg';
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
