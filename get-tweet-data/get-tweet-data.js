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
    // Check for tags
    if (word[0] === '#') {
      output.tags.push(word)
      output.tagCount++
    }
    // Check for mentions
    if (word[0] === '@') {
      output.mentions.push(word)
      output.mentionCount++
    }
  })
  console.log(output)
  return output
};

module.exports = getTweetData;
