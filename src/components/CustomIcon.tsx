import React from 'react';
import {SvgProps} from 'react-native-svg';
import {customFontFamilyType} from 'typings/icon-family-tyoe';

//?---------------icons---------------

import Back from 'src/assets/svg/back.svg';
import Bell from 'src/assets/svg/bell.svg';
import Home from 'src/assets/svg/home.svg';
import Lock from 'src/assets/svg/lock.svg';
import Mobile from 'src/assets/svg/mobile.svg';
import MyBet from 'src/assets/svg/myBet.svg';
import Name from 'src/assets/svg/name.svg';
import Password from 'src/assets/svg/password.svg';
import Person from 'src/assets/svg/person.svg';
import Withdrawal from 'src/assets/svg/withdrawal.svg';

interface Props extends SvgProps {
  name?: customFontFamilyType;
}

const CustomIcon = ({name, ...rest}: Props) => {
  let Icon = getIcon(name);

  return <Icon {...rest} />;
};

const getIcon = (name: customFontFamilyType) => {
  switch (name) {
    case 'person':
      return Person;

    case 'lock':
      return Lock;

    case 'name':
      return Name;

    case 'mobile':
      return Mobile;

    case 'password':
      return Password;

    case 'home':
      return Home;

    case 'my-bet':
      return MyBet;

    case 'withdrawal':
      return Withdrawal;

    case 'back':
      return Back;

    case 'bell':
      return Bell;

    default:
      break;
  }
};

export default CustomIcon;
