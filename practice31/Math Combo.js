//Practice Problem 30
//Math Combo

function cocococombomath(num1,num2,num3,num4,num5){
    var result = ((num1 * num2 + num3)/num4) - num5;
    return result;
}

//Test
console.log(cocococombomath(3,2,6,3,5));
//Returns -1