//8. Use the spread and rest operator to create 
//a function which can multiple numbers from 1...n (n is the number of choice)

var arrayOfNums = (end)=>{
    const numbers = []; 
    let index=0
    for (i=1;i<=end;i++)
    {
        console.log(i)
        numbers[index++]=i
    }
    return numbers
}

function largeSum(...arrayOfNums)
{
    let sum=0
    sum = arrayOfNums.reduce((prevVal, currVal)=> prevVal + currVal, 0)
    return sum
}