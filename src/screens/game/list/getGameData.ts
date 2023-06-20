import {HomeStackName} from 'src/constants/routeNames';
import {game_image_slug} from 'typings/game-type';

export const getGameData = (key: game_image_slug) => {
  switch (key) {
    case 'single_ankda':
    case 't_p_panel':
    case 'red_jodi':
      return {
        image: require('src/assets/img/single.png'),
        route: HomeStackName.GAME1,
      };

    case 's_p_panel':
    case 'd_p_panel':
    case 'jodi':
      return {
        image: require('src/assets/img/jodi.png'),
        route: HomeStackName.GAME2,
      };

    case 'single_ank_sp_panel':
    case 'single_ank_dp_panel':
    case 'family_jodi':
    case 'red_family_jodi':
    case 'family_panel':
      return {
        image: require('src/assets/img/panel-1.png'),
        route: HomeStackName.GAME3,
      };

    case 'cycle_panel':
      return {
        image: require('src/assets/img/panel-5.png'),
        route: HomeStackName.GAME3,
      };

    case 'full_jack':
      return {
        image: require('src/assets/img/panel-4.png'),
        route: HomeStackName.GAME4,
      };

    case 'half_jack':
      return {
        image: require('src/assets/img/panel-5.png'),
        route: HomeStackName.GAME5,
      };

    default:
      break;
  }
};
