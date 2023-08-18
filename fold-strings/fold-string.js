
function foldString (str) {
  // const wordArr = str.split(' ');
  if (str.length <= 3) return str;
  for (let i = 0; i < str.length; i++) {
    console.log(str[i])
  }
  return str
};

module.exports = { foldString }
