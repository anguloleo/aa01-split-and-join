/*
Write a function reverseSentence(sentence) that takes in a sentence as an arg.
The function should return a new sentence where the order of the words is
reversed. Note that you should reverse the order among words, not the order
among characters.
*/

function reverseSentence(str){
    let strArr = str.split(" ");
    let strReversed = "";

    for(let i = strArr.length-1; i >= 0; i--){

        if(i === 0){
            strReversed += strArr[i];
        }
        else{
            strReversed += strArr[i] + " ";
        }
    }

    return strReversed;
}

// console.log(reverseSentence('I am pretty hungry')); // 'hungry pretty am I'
// console.log(reverseSentence('follow the yellow brick road')); // 'road brick yellow the follow'

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = reverseSentence;
