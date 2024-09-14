/*
Write a function mostVowels that takes in a sentence string and returns the
word of the sentence that contains the most vowels.
Vowels are the letters "a", "e", "i", "o", "u".
*/

function mostVowels(sentence){

    // sentence turned into array
    let arr = sentence.split(" ");

    let word = "";
    let vowels = "aeiou";
    let count;
    let wordMostVowels;
    let highestCount = 0;

    if(sentence.length < 1){
        return sentence;
    }

    else{
 
    //cycle through words in array
    for(let i = 0; i < arr.length; i++){

        word = arr[i];
        count = 0;

        //count number of vowels in word
        for(let j = 0; j < word.length; j++){

            if(vowels.includes(word[j])){
                count++;
            }
        }

        // assign word with most vowels
        if(count > highestCount){
            highestCount = count;
            wordMostVowels = word;
        }
        else{
            highestCount = highestCount;
            wordMostVowels = wordMostVowels;
        }
    }
}
return wordMostVowels;
}

// console.log(mostVowels("what a wonderful life")); // "wonderful"
// console.log(mostVowels("the quick brown fox jumps")); // "quick"
// console.log(mostVowels("")); // ""

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = mostVowels;
