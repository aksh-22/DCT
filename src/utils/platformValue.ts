import {Platform} from 'react-native';

export default (ios, android) => {
  return Platform.select({ios, android});
};
