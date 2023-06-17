import {HomeStackName} from 'src/constants/routeNames';
import {game_image_slug} from 'typings/game-type';

export const getGameData = (key: game_image_slug) => {
  console.log('key', key);
  switch (key) {
    case 'single_ankda':
    case 'half_jack':
    case 'full_jack':
      return {
        image: require('src/assets/img/single.png'),
        route: HomeStackName.GAME1,
      };

    case 'jodi':
    case 'family_jodi':
    case 'red_jodi':
    case 'red_family_jodi':
      return {
        image: require('src/assets/img/jodi.png'),
        route: HomeStackName.GAME2,
      };

    case 's_p_panel':
    case 'single_ank_sp_panel':
    case 'single_ank_dp_panel':
      return {
        image: require('src/assets/img/panel-1.png'),
        route: HomeStackName.GAME1,
      };

    case 'd_p_panel':
      return {
        image: require('src/assets/img/panel-2.png'),
        route: HomeStackName.GAME1,
      };

    case 't_p_panel':
      return {
        image: require('src/assets/img/panel-3.png'),
        route: HomeStackName.GAME1,
      };

    case 'family_panel':
      return {
        image: require('src/assets/img/panel-4.png'),
        route: HomeStackName.GAME1,
      };

    case 'cycle_panel':
      return {
        image: require('src/assets/img/panel-5.png'),
        route: HomeStackName.GAME1,
      };

    default:
      break;
  }
};
