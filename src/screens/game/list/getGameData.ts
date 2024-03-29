import {HomeStackName} from 'src/constants/routeNames';
import {randomNumber} from 'src/utils/randomNumber';
import {game_image_slug} from 'typings/game-type';

export const gamePlaceHolder = {
  single_ankda: '',
  single_ank_dp_panel: 'Group Single Ank',
  half_jack: '',
  red_family_jodi: 'Red Group jodi',
  family_jodi: 'Group',
  single_ank_sp_panel: 'Group Single Ank',
  red_jodi: '',
  cycle_panel: 'Cycle Patti',
  jodi: '',
  s_p_panel: '',
  family_panel: 'Family panel',
  t_p_panel: '',
  d_p_panel: '',
  full_jack: '',
};

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

    case 'family_jodi':
    case 'red_family_jodi':
      return {
        image: require('src/assets/img/panel-1.png'),
        route: HomeStackName.GAME3,
        key,
      };

    case 'family_panel':
      return {
        image: require('src/assets/img/panel-1.png'),
        route: HomeStackName.GAME3,
        key,
        length: 3,
      };

    case 'single_ank_sp_panel':
    case 'single_ank_dp_panel':
      return {
        image: require('src/assets/img/panel-1.png'),
        route: HomeStackName.GAME3,
        key,
        length: 1,
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

export const getNumArray = (numberData, data) => {
  const numberArray = numberData[data?.group];
  return numberArray;
};

export const formatGameData = (bidData, gameData) => {
  switch (gameData?.slug) {
    case 'single_ankda':
    case 't_p_panel':
    case 'red_jodi':
    case 's_p_panel':
    case 'd_p_panel':
    case 'jodi':
      return formatGame1Data(bidData, gameData);

    case 'single_ank_sp_panel':
    case 'single_ank_dp_panel':
    case 'family_jodi':
    case 'red_family_jodi':
    case 'family_panel':
    case 'cycle_panel':
      return formatGame2Data(bidData, gameData);

    case 'full_jack':
      return formatGame4Data(bidData, gameData);

    case 'half_jack':
      return formatGame5Data(bidData, gameData);

    default:
      break;
  }
};

export const formatGame1Data = (bidData, gameData) => {
  const {slug, market} = gameData ?? {};
  const {id, type} = market ?? {};
  let numbers = '';
  const token_id = randomNumber();
  const data = Object.keys(bidData).map((el, index) => {
    numbers += `${index !== 0 ? ',' : ''}${el}`;
    return {
      token_id: randomNumber(),
      bid: String(el),
      point: String(bidData[el]),
      game_type: slug,
      market_type: type,
    };
  });
  return {data, market_id: id, numbers, token_id};
};

export const formatGame2Data = (bidData, gameData) => {
  const {slug, market} = gameData ?? {};
  const {id, type} = market ?? {};
  let numbers = '';
  const token_id = randomNumber();
  const bidDataArr = Object.keys(bidData);
  const data = bidDataArr.map((el, index) => {
    numbers += `${bidData[el]?.numbers}${
      index !== bidDataArr.length - 1 ? ',' : ''
    }`;
    return {
      token_id: randomNumber(),
      bid: String(bidData[el]?.group),
      point: String(bidData[el]?.points),
      game_type: slug,
      market_type: type,
    };
  });
  numbers = [...new Set(numbers.split(','))].join(',');

  return {data, market_id: id, numbers, token_id};
};

export const formatGame4Data = (bidData, gameData) => {
  const {slug, market} = gameData ?? {};
  const {id, type} = market ?? {};
  let numbers = '';
  const token_id = randomNumber();
  const bidDataArr = Object.keys(bidData);
  const data = bidDataArr.map((el, index) => {
    const bid = `${bidData[el]?.open}-${bidData[el]?.close}`;
    numbers += `${bid}${index !== bidDataArr.length - 1 ? ',' : ''}`;
    return {
      token_id: randomNumber(),
      bid,
      point: String(bidData[el]?.points),
      game_type: slug,
      market_type: type,
    };
  });
  numbers = [...new Set(numbers.split(','))].join(',');

  return {data, market_id: id, numbers, token_id};
};

export const formatGame5Data = (bidData, gameData) => {
  const {slug, market} = gameData ?? {};
  const {id, type} = market ?? {};
  let numbers = '';
  const token_id = randomNumber();
  const bidDataArr = Object.keys(bidData);
  const data = bidDataArr.map((el, index) => {
    const bid = bidData[el].value;
    numbers += `${bid}${index !== bidDataArr.length - 1 ? ',' : ''}`;
    return {
      token_id: randomNumber(),
      bid,
      point: String(bidData[el]?.points),
      game_type: slug,
      market_type: type,
    };
  });
  numbers = [...new Set(numbers.split(','))].join(',');

  return {data, market_id: id, numbers, token_id};
};

export const formatOpenPanna = (val: string) => {
  if (val.includes('-') && val.length === 4) {
    return val.split('-')[0];
  }
  if (val.includes('-')) {
    return val;
  }

  if (val.length < 4) {
    return val;
  }
  let valStr = '';
  const valArr = val?.split('');
  valArr.forEach((el, i) => {
    if (i === valArr.length - 1) {
      valStr += `-${el}`;
    } else {
      valStr += el;
    }
  });
  return valStr;
};

export const formatClosePanna = (val: string) => {
  if (val.includes('-') && val.length === 2) {
    return val.split('-')[0];
  }
  if (val.includes('-')) {
    return val;
  }

  if (val.length < 2) {
    return val;
  }
  let valStr = '';
  const valArr = val?.split('');
  valArr.forEach((el, i) => {
    if (i === 1) {
      valStr += `-${el}`;
    } else {
      valStr += el;
    }
  });
  return valStr;
};

// !-------->  full sungum
// {
// "data": [
// {
// "token_id": "1h4cv0qms0vr21edk5rks04q8flmprdki",
// "bid": "112-223",
// "point": "12",
// "game_type": "red_family_jodi",
// "market_type": "close"
// },
// {
// "token_id": "1h4cv0qms0caus0hchcbc0586fb8taj2d",
// "bid": "232-333",
// "point": "32",
// "game_type": "red_family_jodi",
// "market_type": "close"
// }
// ],
// "market_id": "0f541647-47c2-451b-b545-a52abe389c96",
// "numbers": "112-223, 232-333",
// "token_id": "1h4cv0qmr0ohn0dk5skf40tg0vb1lsuh4"
// }

// !-------->  half sungum
// {
// "data": [
// {
// "token_id": "1h4cv0qms0vr21edk5rks04q8flmprdki",
// "bid": "1-223",
// "point": "12",
// "game_type": "red_family_jodi",
// "market_type": "close"
// },
// {
// "token_id": "1h4cv0qms0caus0hchcbc0586fb8taj2d",
// "bid": "232-3",
// "point": "32",
// "game_type": "red_family_jodi",
// "market_type": "close"
// }
// ],
// "market_id": "0f541647-47c2-451b-b545-a52abe389c96",
// "numbers": "1-223, 232-3",
// "token_id": "1h4cv0qmr0ohn0dk5skf40tg0vb1lsuh4"
// }
