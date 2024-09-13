/*
Write a function longestWord(sentence) that takes in a sentence string as an
argument. The function should return the longest word in the sentence. If there
is more than one "longest word", return the first of these instances.
*/

function longestWord(sentence){
    let arr = sentence.split(" ");
    let word = "";
    let longestWord = "";

    for(let i = 0; i < arr.length; i++){

        word = arr[i];

        if(word.length > longestWord.length){
            longestWord = word;
        }

    }
    return longestWord;
}

// console.log(longestWord('where did everyone go')); // 'everyone'
// console.log(longestWord('prefer simplicity over complexity')); // 'simplicity'
// console.log(longestWord('')); // ''

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = longestWord;
