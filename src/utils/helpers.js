export const isJSON = (arg) => {
  try {
    JSON.parse(arg);
    return true;
  } catch (e) {
    return false;
  }
};
