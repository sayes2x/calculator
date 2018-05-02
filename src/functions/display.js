const display = result => {
  let resultStr = '';
  // to prevent numbers like 9999999999 from being rounded to 10000000000
  if (result > 999999999 && result < 10000000000) {
    resultStr = result.toString();
    resultStr = resultStr.slice(0, 10);
    // to handle all other cases
  } else {
    let digits = 9;
    resultStr = result.toPrecision(digits);
    while (resultStr.length > 10) {
      digits -= 1;
      resultStr = result.toPrecision(digits);
    }
    // get rid of unneeded zeros in scientific notation
    resultStr = resultStr.replace(/.0+e/, 'e');
  }
  return +resultStr > 9999999999
    ? resultStr.toString()
    : (+resultStr).toString();
};

export default display;
