/*
Write a function mostVowels that takes in a sentence string and returns the
word of the sentence that contains the most vowels.
Vowels are the letters "a", "e", "i", "o", "u".
*/

function mostVowels(sentence){

    let arr = sentence.split(" ");
    let word = "";
    let vowels = "aeiou";
    let count = 0;
    let wordMostVowels;
 

    for(let i = 0; i < arr.length; i++){

        word = arr[i];
        wordMostVowels = arr[i];
        

        for(let j = 0; j < word.length; j++){
            if(vowels.includes(word[j])){
                count++;
            }
        }

        if(count)
}

// console.log(mostVowels("what a wonderful life")); // "wonderful"
// console.log(mostVowels("the quick brown fox jumps")); // "quick"
// console.log(mostVowels("")); // ""

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = mostVowels;
