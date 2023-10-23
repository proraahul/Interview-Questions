function reduceString(inputString){
    let stack = [];
    for(let char of inputString){

        if(stack.length > 0 && stack[stack.length-1] === char){
            stack.pop(char);
        }else{
            stack.push(char);
        }
    }
    return stack.join('');
}

const input = "aaabbbccddd";
const result = reduceString(input);
console.log(result); 
