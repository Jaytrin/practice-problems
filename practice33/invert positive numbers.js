// invert positive number
// Build a function, invert_negatives, that takes a number as a parameter, and if the number is positive, it makes it negative. If it isn't a number, it returns false
//
// - invert_negatives(-5)
// - Returns: -5
// - invert_negatives(4000)
// - Returns: -4000
// - invert_negatives('puppies')
// - Returns: false

function invert_negatives(number){
    var result = null;
    if(number > 0){
        result = number * (-1);
    } else if (number){
        result = number;
    } else {
        result = false;}
    return result;
}