/*
Write a function shortestWord that accepts a sentence as an argument. The
function should return the shortest word in the sentence. If there is a tie,
return the word that appears later in the sentence.
*/

function shortestWord(sentence){
    let arr = sentence.split(" ");
    let word = "";
    let shortestWord = "";
    shortestWord = arr[0];

    for(let i = 1; i < arr.length; i++){

        word = arr[i];
        
        if(word.length <= shortestWord.length){

                shortestWord = word;   
        }
        else{
            shortestWord = shortestWord;
        }
    }
    return shortestWord;

}

// console.log(shortestWord('what a wonderful life'));     // 'a'
// console.log(shortestWord('the quick brown fox jumps')); // 'fox'
// console.log(shortestWord('do what you enjoy'));         // 'do'

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = shortestWord;
