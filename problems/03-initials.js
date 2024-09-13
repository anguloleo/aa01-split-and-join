/*
Write a function initials(name) that accepts a full name as an arg. The function
should return the initials for that name.
*/

function initials(name){
    let arr = name.split(" ");
    let names = "";
    let initials = "";

    for(let i = 0; i < arr.length; i++){

        names = arr[i];
        initials += names[0].toUpperCase();
    }

    return initials;
}


// console.log(initials('anna paschall')); // 'AP'
// console.log(initials('Mary La Grange')); // 'MLG'
// console.log(initials('brian crawford scott')); // 'BCS'
// console.log(initials('Benicio Monserrate Rafael del Toro Sánchez')); // 'BMRDTS'

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = initials;
