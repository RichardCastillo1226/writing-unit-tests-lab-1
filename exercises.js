// Question 1
const isUpperCase = (string) => {
  return string === string.toUpperCase();
  };
  
  // Question 2
    const removeVowels = (arr) => {
      const regex = /[aeiou]/gi
      return arr.map(word => word = word.replace(regex,''))
    }; 
  
  // Question 3
  const wordCap = (string) => {
    return string.split(" ").map(word => word[0].toUpperCase() + word.toLowerCase().slice(1,word.length)).join(" ")
  };
  
  // Question 4
  const swapCase = (string) => {
    return string.split("").map(word => word === word.toUpperCase() ? word = word.toLowerCase() : word = word.toUpperCase()).join("")
  };
  
  // Question 5
  const staggeredCase = (string) => {
    let run = true
    let result = ""
    const nonAlphabet = /[^A-Z\s]/gi
    for(let i = 0; i < string.length;i++){
      if(string[i] === " " || string[i].match(nonAlphabet)) {
        result += string[i]
        continue
      }
      run ? (result += string[i].toUpperCase(), run = false) : (result += string[i].toLowerCase(), run = true)
    }
      return result
  };
  
  // Question 6
  const wordLengths = (string) => {
    return string ? string.split(" ").map(word => {
      return word =`${word} ${word.length}`
    }) : []
  };
  
  // Question 7
  const searchWord = (string, text) => {
    const regexStr = new RegExp(`(${string})([^a-z0-9])?$`, "gi");
    return text.split(" ").filter(char => char.match(regexStr)).length
  };
  
  
  // The code below ensures that this file can talk to our test file.
  module.exports = {
    isUpperCase,
    removeVowels,
    wordCap,
    swapCase,
    staggeredCase,
    wordLengths,
    searchWord,
  };