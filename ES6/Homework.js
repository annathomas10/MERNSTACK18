let Student = {
    Standard : "Higher Secondary",
    Session : "Final Session",
    TotalMarks : "75%",
    Subject : {
        Physics : 80,
        Chemistry : 89,
        Language : 92
    }
}

//let { Name = "Joe  S", Session, Standard, Subject} = Student

let { Name = "Joe S", Session, Standard, Subject : {Physics, Mathematics = 100, Language}} = Student

//use of destructuring
//data from multiple sources with user object, product, card type, dollar amount etc etc. Want to combine it
// usig just the info from each. Dot is tedious plus...initialize each time (let name.., let ...., let ...)
//destructuring is easier and no init over and over
//One obj called OrderDetails/paymentdetails etc and combine these values in there with nested values as well 
//if we want
//Array destructuring is most common
//Dependancy injection uses destrycturing...to check into
//Passing data - props get destructtred .... to check into

//1. print firstname and sessionTopics,

console.log('HW1', Name, Student) //Name is not printed???? Line 14 has no effect
/*
//2. along with that also create a lastname and covered3 as "ES6", without making any change in StudentTest

let { lastname = "Trent"} = Student
Student.Subject.ES6=99
console.log('HW2',lastname) //even without referring to Student, I can access lastname??
//now ES6 is also in the original, but lastname is not. And the point was to not use the dot notation which
//would take several lines if more than one value
Student.lastname = 'LastnameUsingDotNotation'
console.log('HW2',Student) 

//3. create a funtion with name multiply which accepts three parameters, and return multiplication of all
//but if we dont pass any parameter it returns 0

function multiply(p1,p2,p3)
{
    if (p1==undefined && p2==undefined && p3==undefined)
        return 0;
    else
        {
            //question - is there a better way? But the correct answer based on specs is just p1*p2*p3
            //even if some undefined
            if (p1==undefined) p1=1
            if (p2==undefined) p2=1
            if (p3==undefined) p3=1
            return p1*p2*p3
        }
}

console.log('HW3', multiply())
console.log('HW3', multiply(2,3))

//4. create an array of 1 - 5 and add arr[newval] = at 6th place, print the output using for of and for in loop

arr = [10,20,30,40,50]
//arr[newval] = 6  //error - newval is undefined
//arr[6]=6 //position 5 was skipped so i think js arr starts with 0. It was printed as undefined
arr[5]=60
for (v in arr){
    console.log('HW4: ', arr[v])
}
for (v of arr){
    console.log('HW4: ', v)
}


//5. create an example of const where we can update on property of the object, where it says const is mutable
const cardReaders = {
    pax: 'pax',
    ipp320: 'ipp320'
}
console.log('HW5: ',cardReaders)
cardReaders.pax='pax100'
console.log('HW5: ',cardReaders)


//6. create a for loop using var and let, print each value in timeout after 2 second and to 
//demonstrate functional scope of var and lexical of let 
console.log('HW6: ')
for (var index = 1; index <= 5; index++) {
    setTimeout(() => {
        //this only prints 6
        console.log("Using var: " + index)    
    }, 2000);
}

for (let index = 1; index <= 5; index++) {
    setTimeout(() => {
        console.log("Using let: " + index)    
    }, 2000);
}

*/