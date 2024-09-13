/*
Write a function snakeToPascal that takes in a snake_cased string and returns a
PascalCased version of the string. snakecase is where each word is separated
with underscores (``). PascalCase is a string where the first char of each word
is capital, all other chars lowercase.
*/

function snakeToPascal (str){

    let arr = str.split("_");
    let word = "";
    let newWord = "";
    let newSentence = "";

    for(let i = 0; i < arr.length; i++){

        //get word from array
        word = arr[i];
        
        //capitalize first letter
        newWord = word[0]
        newWord = newWord.toUpperCase();
            
        //complete word
        for(let i = 1; i < word.length; i++){
            newWord += word[i].toLowerCase();
        }

        arr[i] = newWord;
    }

    newSentence = arr.join("");

    return newSentence;
}

// console.log(snakeToPascal('snakes_go_hiss')); // 'SnakesGoHiss'
// console.log(snakeToPascal('say_hello_world')); // 'SayHelloWorld'
// console.log(snakeToPascal('app_academy_is_cool')); // 'AppAcademyIsCool'
// console.log(snakeToPascal('APp_ACADEMY_iS_cOol')); // 'AppAcademyIsCool'

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = snakeToPascal;
