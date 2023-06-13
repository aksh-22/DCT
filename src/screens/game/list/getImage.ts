import {game_image_slug} from 'typings/game-type';

export const getImage = (key: game_image_slug) => {
  console.log('key', key);
  switch (key) {
    case 'single_ankda':
      return require('src/assets/img/single.png');

    case 'jodi':
    case 'family_jodi':
    case 'red_jodi':
    case 'red_family_jodi':
      return require('src/assets/img/jodi.png');

    case 's_p_panel':
    case 'single_ank_sp_panel':
    case 'single_ank_dp_panel':
      return require('src/assets/img/panel-1.png');

    case 'd_p_panel':
      return require('src/assets/img/panel-2.png');

    case 't_p_panel':
      return require('src/assets/img/panel-3.png');

    case 'family_panel':
      return require('src/assets/img/panel-4.png');

    case 'cycle_panel':
      return require('src/assets/img/panel-5.png');

    default:
      break;
  }
};
