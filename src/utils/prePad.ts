export const prePad = value => {
  if (value >= 10) {
    return value;
  } else {
    return `0${value}`;
  }
};
