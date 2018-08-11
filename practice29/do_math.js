function do_math(numInput1,numInput2,operator){
    var result = null;
    switch(operator){
        case '+':
            result = numInput2 + numInput1;
        break;
        case '-':
            result = numInput2 - numInput1;
            break;
        case '*':
            result = numInput2 * numInput1;
            break;
        case '/':
            result = numInput2 / numInput1;
            break;
    }
    return result;
}

//TEST
do_math(5,2,'+');
do_math(5,2,'-');
do_math(5,2,'*');
do_math(5,2,'/');