// find middle of string
// Build a function, find_middle_letters, that finds the middle of a string. If the string is an odd number of characters, it returns 1 letter. If it is an even number of characters, it returns 2 characters. It takes a string as a parameter
//
// Example:
//     find_middle_letters('seven')
// Return: 'v'
// find_middle_letters('dish')
// Return: 'is'

function find_middle_letters(word){
    var result = null;
    if(word.length % 2){
        result = word[Math.floor(word.length/2)];
    }
    else {
        result = "" + word[Math.floor(word.length/2 - 1)] + word[Math.floor(word.length/2)];
    }
    return result;
}

