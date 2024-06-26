// callbacks and callbacks and callbacks - becomes full of callback function
// when multiple callbacks fail it ends up in a callback hell situation
// signinuser

// function Authentication_API(userInfo) {} //Login SignUp, create userSession //uses - authentication api
// function Authorization_API(userInfo, sessionId) {} // Permissions to access like admin/normal user - roles //uses - Authorization api
// function Navigation_API(userInfo, permissions) {} // what all pages user can navigate, returns first page //uses - navigation api

/*function LoginProcess(userId, password) {
    let userInfo = {userId, password}

    //let userSession = Authentication(userInfo, Authorization) //async

    Authentication(userInfo, Authorization) //async

    function Authentication(userInfo, Authorization) {
        
        //this will cause Authentication_API error but the code demonstrates the
        //idea of callback hell. Authentication_API is call to backend
        let userSession = Authentication_API(userInfo)

        if(userSession==valid) //
            Authorization(userInfo, userSession, Navigation)
        else
            Authentication(userInfo, Authorization) //if server fails we'll have many many recursive calls to Authentication
    }

    function Authorization(userInfo, userSession, Navigation) {
        let permissions = Authorization_API(userInfo, userSession) //async

        let loginScreen = Navigation_API(userInfo, permissions) //async
    }

    //let permissions = Authorization(userInfo, userSession) //async

    let displayScreen = Navigation(loginScreen) //async    
}

LoginProcess('anna','123')  */

//call back hell : at line number 23, if we fall in a loop of failures it will take us into callback hell situation
//not a proper handling of response
//mandatory to take immediate action after we get response

// Promise - is a object which completes some async/sync job in its execution but has the capability to hold
// manipulate and return the response when asked

/*
let promiseObject =new Promise((resolve, reject) => {

    //let userSession = Authentication_API(userInfo) //make call to server get the response and store

    setTimeout(()=>{
        resolve({
            status : "Success",
            value : "User Session Object",
            code : 200
        })}, 
    2000)

    setTimeout(()=>{
        reject({
            status : "Failed",
            value : "User Session Failed",
            code : 403.15
        })}, 
    1000)
})

console.log('1. ',promiseObject)

//response is returned upon being asked ==> promiseObj.then.catch
// .then => retruns for resolve cases
// .catch => retruns for rejected cases

promiseObject.then((response, error)=>{
    console.log("execution is successful  ", response) //resolved
}).catch((response, error)=>{
    console.log("execution is failed  ", response) //rejected
})

console.log('2. ',promiseObject)

//we get 403.15 only because we coded that in. Really what should happen 
//here is "no response"
console.log('3. ',promiseObject) 

console.log("Promise Completed!!!");   */

// create a promise object with name student on it after 2 seconds student is pass (resolved case)
// and set status stating learnt es6
// then for rejected case set that status - i am progressing

let myPromise = new Promise((resolve,reject)=>{

    setTimeout(() => {
        //when I had a ":" after resolve, no error, but it just does not get executed
        //maybe in a website behind page it would show error....? No tested, it does not
        resolve:({
            status:'passed',
            value:'learnt es6',
            code:'200'
           // test:'2'
        })
    }, 2000);

    setTimeout(() => {
        reject:({
            status:'in progress',
            value:'student still studying',
            code:'100'
        })
    }, 2000);
})

console.log(myPromise)

myPromise.then((response, error)=>{
    console.log("execution is successful  ", response) //resolved
}).catch((response, error)=>{
    console.log("execution is failed  ", response) //rejected
})

//THE PROMISE IS NEVER EXECUTED FOR ME

console.log(myPromise)

console.log(myPromise)

console.log('done') 

