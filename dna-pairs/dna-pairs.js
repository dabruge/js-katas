// Please do not change the name of this function + comment for commit
function dnaPairs(dna) {

  if (dna.length === 0) return []
  
  const dnaSplit = dna.split("")
  
  const pairs = dnaSplit.map(char => {
    switch(char) {
      case "A":
        return Array.from(char + "T")
      case "T":
        return Array.from(char + "A")
      case "C":
        return Array.from(char + "G")
      case "G":
        return Array.from(char + "C")
    }
  })
  return pairs
}

module.exports = dnaPairs;
