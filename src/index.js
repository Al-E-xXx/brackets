module.exports = function check(str, bracketsConfig) {
  let newStr = '';
  let coincidence = false;

  for (let i = 0; i < str.length; i += 1) {
    let found = false;

    for (let n = 0; n < bracketsConfig.length; n += 1) {
      if (
        str[i] === bracketsConfig[n][0] &&
        str[i + 1] === bracketsConfig[n][1]
      ) {
        newStr = str.slice(0, i) + str.slice(i + 2);
        coincidence = true;
        found = true;
        break;
      }
    }

    if (found) {
      break;
    } else {
      newStr = str;
    }
  }

  if (coincidence && newStr.length > 0) {
    return check(newStr, bracketsConfig);
  }

  return newStr.length === 0;
};
