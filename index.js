function theBeatlesPlay(musicians, instruments) {
var newArray = [];

for (var i = 0; i < musicians.length; i++) {  
  var string = `${musicians[i]} plays ${instruments[i]}` 
  newArray.push(string)
  
  }
  return newArray;
} 


function johnLennonFacts(string) {
  var newArray = [];
  
  let i = 0;
  while (i < string.length) {
    newArray.push(`${string[i]}!!!`)
    i++;
  }
  return newArray;
}

function iLoveTheBeatles(parameter) {
  var newArray = [];
  var str = "I love the Beatles!"
    if (parameter >= 7) {
      newArray.push(str) * 8 
    }
}
// add solution here
