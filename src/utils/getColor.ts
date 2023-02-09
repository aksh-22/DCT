import colors from 'src/constants/colors';

export default key => {
  switch (key) {
    case 0:
      return colors.lightPink;

    case 1:
      return colors.lightGreen;

    case 2:
      return colors.lightYellow;

    case 'purple':
      return colors.fontColor2;

    default:
      return colors.lightPink;
  }
};
