import {customFontFamilyType} from 'typings/icon-family-tyoe';
import {MoreStackName} from './routeNames';

type Props = {
  id: number;
  name: string;
  key: string;
  iconName: customFontFamilyType;
  route?: string;
};

const moreList: Props[] = [
  {
    id: 1,
    name: 'Profile',
    key: 'profile',
    iconName: 'person',
    route: MoreStackName.PROFILE,
  },
  {
    id: 2,
    name: 'Game Rate',
    key: 'rate',
    iconName: 'game-rate',
    route: MoreStackName.GAME_RATE,
  },
  {
    id: 3,
    name: 'Feedback',
    key: 'feedback',
    iconName: 'feedback',
    route: MoreStackName.FEEDBACK,
  },
  {
    id: 4,
    name: 'Share App',
    key: 'share',
    iconName: 'share',
  },
  {
    id: 5,
    name: 'How to play',
    key: 'play',
    iconName: 'how-to-play',
    route: MoreStackName.PLAY,
  },
];

export default moreList;
