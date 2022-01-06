module.exports = function reverse (n) {
    let str = String(n);
  let res = '';
  for (let i = str.length-1; i >= 0; i--) {
    res += str[i];
  }
  return(parseInt(res))
}
