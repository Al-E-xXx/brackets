module.exports = function check(str, bracketsConfig) {
  let newStr = '';
  let coincidence = false;
  
  main_loop: for (let i = 0; i < str.length; i++) {
    for (let n = 0; n < bracketsConfig.length; n++) {
      if (str[i] === bracketsConfig[n][0] && str[i + 1] === bracketsConfig[n][1]) {
        newStr = str.slice(0, i) + str.slice(i + 2);      
        // console.log(newStr);
        coincidence = true;
        break main_loop;
      } else {
        newStr = str;
      }
    }
  }    

  if (coincidence === true && newStr.length > 0) {
    return check(newStr, bracketsConfig);
  } else {
    if (newStr.length === 0) {
      return true;
    } else {
      return false;
    }
  }  
}
