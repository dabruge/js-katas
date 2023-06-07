
function sentenceToCamelCase (sentence, isFirstCharUpper) {
  if (sentence.length === 0) return ''
  const wordArr = sentence.split(' ')
  wordArr[0] = (isFirstCharUpper ?
                wordArr[0][0].toUpperCase() : 
                wordArr[0][0].toLowerCase())
                + wordArr[0].slice(1)
  for (let i = 1; i < wordArr.length; i++) {
    wordArr[i] = wordArr[i][0].toUpperCase() + wordArr[i].slice(1)
  }
  return wordArr.join('')
};

function camelToEnglish (camelCaseStr) {
  const sliceIndexes = [0]
  const wordsArr = []
  if (camelCaseStr.length === 1) return camelCaseStr.toUpperCase() + '.'
  const checkStr = camelCaseStr + '.'

  for (let i = 0; i < checkStr.length; i++) {
    if (checkStr[i] === checkStr[i].toUpperCase() || i === checkStr.length - 1) {
      sliceIndexes.push(i)
    }
  }

  for (let i = 0; i < sliceIndexes.length - 1; i++) {
    if (i === 0) {
      let firstWord = checkStr.slice(sliceIndexes[i], sliceIndexes[i+1]).toLowerCase()
      wordsArr.push(firstWord[0].toUpperCase() + firstWord.slice(1))
    } else {
      wordsArr.push(checkStr.slice(sliceIndexes[i], sliceIndexes[i+1]).toLowerCase())
    }
  }
  return wordsArr.join(' ') + '.'
}

module.exports = { sentenceToCamelCase, camelToEnglish };
