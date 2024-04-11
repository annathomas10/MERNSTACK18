/*let cities=['paris','london','ny']
console.log(cities[0])
console.log(...cities)

let user = {name:'anna',age:29}
let address = {street:"12 test", city:"test"}
let delivery = {...user, ...address} //immutable ie if i add to user later, this will not change
console.log(delivery)

Address.phone = 89898989;

// console.log(Delivery)
// console.log(Address)

function sum (a,b,c,d,e)
{
    return a+b+c+d+e
}

console.log(sum(1,2,3,4,5))

//rest
function sum_large(...numbers)
{
    let sum = 0;

    //reduce works like this -
    //preval is assigned the current value of the summation, starts with 0 since 0 is given
    //currval is always set to prevVal + currVal
    sum = numbers.reduce((prevVal, currVal)=> prevVal + currVal, 0)
    return sum
}

//useful with large array
let numList = [1,2,3,4,5,6,7,8,9,10]
console.log(sum_large(...numList))

console.log(Sum_Large.apply(null, numList)) //legacy way by using apply function in javascript   */

/*
//Homework:

//Spread Operator - 
//create a list of vaccines and print
//create doctor object and print his qualifications and other details using spread
//create a vaccine object with details like - name, no of doses required, price 
//etc and merge it with nearest doctor object using spread

let vaccines=['mumps','flu','covid','measles'] 
let doctor ={
    name:"murphy",
    qualifications:{
        degree:'MD',
        residency:'hospital xyz',
        publications:'in progress'
    }
}
let doctorWorkAddress = {Hospital:'UMD', Street:'12 test', city:'test'}
let doctorPatients = {patients:['sandra','peter']}
let details = {...doctor,...doctorWorkAddress, ...doctorPatients}
console.log(details)
//console.log(...doctor,...doctorWorkAddress, ...doctorPatients) //this gives cannot iterate error
*/


//Rest Parameter - 
//create a function which accepts start and end of number and generates a array of that size, [100....150]
//then use this array to pass as spread operator into a function named largesum
//in largesum we should accept the array in rest parameter (...arrayOfNums), and then add the numbers 

var arr = (start,end)=>{
    const numbers = []; //see how to initialize, also it can be made constant, yet can add to it
    let index=0
    for (i=start;i<=end;i++)
    {
        console.log(i)
        numbers[index++]=i
    }
    return numbers
}
//console.log(arr(1,5))
let arrayOfNums = arr(100,2000)

function largeSum(...arrayOfNums)
{
    let sum=0
    sum = arrayOfNums.reduce((prevVal, currVal)=> prevVal + currVal, 0)
    return sum
}

console.log('large sum: ', largeSum(...arrayOfNums)) //notice use the spread both when calling, and in defn

