// Please do not change the name of this function
function getTweetData (tweet) {
  let output = {
    tags: [],
    mentions: [],
    tagCount: 0,
    mentionCount: 0,
    length: tweet.length
  }

  const tweetWords = tweet.split(" ")

  tweetWords.forEach(word => {
    // Check for common punctuation and trim if necessary
    if (/[!?.,:;]/.test(word[word.length - 1])) {
      word = word.slice(0, -1)
    }
    // Check for tags
    if (word[0] === '#' && !output.tags.includes(word)) {
      output.tags.push(word)
      output.tagCount++
    }
    // Check for mentions
    if (word[0] === '@' && !output.mentions.includes(word)) {
      output.mentions.push(word)
      output.mentionCount++
    }
  })
  console.log(output)
  return output
};

module.exports = getTweetData;
