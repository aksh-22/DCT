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
        key,
      };

    case 's_p_panel':
    case 'd_p_panel':
    case 'jodi':
      return {
        image: require('src/assets/img/jodi.png'),
        route: HomeStackName.GAME2,
        key,
      };

    case 'single_ank_sp_panel':
    case 'single_ank_dp_panel':
    case 'family_jodi':
    case 'red_family_jodi':
    case 'family_panel':
      return {
        image: require('src/assets/img/panel-1.png'),
        route: HomeStackName.GAME3,
        key,
      };

    case 'cycle_panel':
      return {
        image: require('src/assets/img/panel-5.png'),
        route: HomeStackName.GAME3,
        key,
      };

    case 'full_jack':
      return {
        image: require('src/assets/img/panel-4.png'),
        route: HomeStackName.GAME4,
        key,
      };

    case 'half_jack':
      return {
        image: require('src/assets/img/panel-5.png'),
        route: HomeStackName.GAME5,
        key,
      };

    default:
      break;
  }
};

// GAME 1
// const singleAnk = {
//   data: [
//     {
//       token_id: '419908_1685021556761',
//       market_type: 'Open',
//       game_type: 'SINGLE ANK',
//       bid: '1',
//       point: '12',
//     },
//     {
//       token_id: '419908_1685021556762',
//       market_type: 'Open',
//       game_type: 'SINGLE ANK',
//       bid: '5',
//       point: '36',
//     },
//     {
//       token_id: '419908_1685021556763',
//       market_type: 'Open',
//       game_type: 'SINGLE ANK',
//       bid: '7',
//       point: '80',
//     },
//   ],
//   market_id: 'fe0b7465-6ca3-4fa1-9de7-23ee84da3935',
//   numbers: '1,5,7',
//   token_id: 'dbg1685021236772',
// };

// GAME 2
// const family = {
//   data: [
//     {
//       token_id: '419908_1685021556761',
//       market_type: 'Open',
//       game_type: 'Family panel',
//       bid: '123',
//       point: '20',
//     },
//     {
//       token_id: '419908_1685021556762',
//       market_type: 'Open',
//       game_type: 'Family panel',
//       bid: '139',
//       point: '23',
//     },
//   ],
//   market_id: 'fe0b7465-6ca3-4fa1-9de7-23ee84da3935',
//   numbers: '123,128,137,134,139,148',
//   token_id: 'dbg1685021236772',
// };
