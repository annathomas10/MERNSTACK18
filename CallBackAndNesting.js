//Callback - we pass a function as parameter to another function to increase the resusability is termed as callback function

//But I think even more useful is that you are free to pass in the logic needed at that moment ie 
//polymorsphism eg pass in logic for one hardware device vs another
//Update : I was wrong - this cannot be polymorphic since you would need differently named / paramed etc
// and for that you need to know the device type - see Overloading.js for polymorphism
//Reusability to me does not seem to need callback since yuo can just call what is defined in the file 
//or in an imported file

//a common feature enabled function can be created and used as callback function when in need
function PrintDetails(printMsg, param1, param2) {
    console.log(printMsg, param1, param2)
}


function GetUserInfo(firstName, lastName, printCallBk) {
    printCallBk("User Details are ", firstName, lastName)   //callback function executes to give desired result
}

GetUserInfo("David", "Miller", PrintDetails)

function GetSesionInfo(sessionName, sessionTopic, printCallBk) {
    printCallBk("Session details are ", sessionName, sessionTopic)    
}

GetSesionInfo("MERNSTack", "Core Javascript - CallBack ", PrintDetails)


//nested function and javascript currying (arrange raw, )

/*currying is a technique in JavaScript that allows you to transform functions 
with multiple arguments into a sequence of functions, each taking one argument 
at a time. It promotes code reusability, composability, and flexibility */

/* Curried functions syntactically look very similar to Closures; but in the midst 
of their many similarities they have differences in their purpose. Currying is not 
used to capture the lexical environment of its outer scope, While Closures aren't 
used to breakdown multi-argument functions */

var number1 = 20;

function A(a) {
    //console.log(d) //- scope of variables decrease when we go up
    
    return function B(b) {
        
        return function C(c) {
            
            return function D(d) {
                   return  a + b + c + d + number1
            }
        }
    }   
}

var objA = A(5) //returns function B
var objB = objA(10) //returns function C
var objC = objB(15) //returns function D

var result = objC(20) //returns result a+b+c+d+20 = 70

console.log(result)


//chained execution

var result2 = A(5)(10)(15)(30)  //A()=>B()=>C()=>D()
console.log(result2)