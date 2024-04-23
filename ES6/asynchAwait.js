// async and await - to give us a synchronised behaviour of execution though executing asynchronously
// if we create promise object inside async it will take it or if we dont create promise then it will wrap a 
//promise object
// async and await : //Async : A way to have multi-threading in javascript like other object oriented 
//programming language
//I think asynch releases thread.....but also awaits before executing next line
//I read js uses worker threads for multi thread...

//Promises and event loops - event loop is only one thread that is juggling calls so it makes it look
//concurrent to us

// fetch userInfo - call //150 calls
// fetch productDetails - call //200 calls
// fetch cartInfo - call //100 calls

// stack1(main thread) - 200 mb (300 request/sec) 
// ==> if requests increases 600 request/sec, now we need thread management

// (async) 
// (await) 
// stack2(thread) -  200 mb (300 request/sec) //150
// stack3(thread) -  200 mb (300 request/sec) //200
// stack4(thread) -  200 mb (300 request/sec) //100

/*
function resolveAfter2Seconds() {
        //the use of promise - i can now think of this as I/O
    return new Promise((resolve,reject) => {
            setTimeout(() => {
                resolve({
                    "statuscode" : 200,
                    "statusmsg" :'resolved'
                    });
            }, 2500);
    });
}

console.log("async Execution starts");

//async creates a new thread to execute API's that we see will take some time
async function asyncCall() {

    console.log("Before await - blocking thread starts")

    await resolveAfter2Seconds()
            .then((data, err)=>console.log(data))
            .catch((err)=>console.log(err))

    console.log("After await - thread executes one by one")

    console.log("Before await 2 - blocking thread starts")

    await resolveAfter2Seconds()
            .then((data, err)=>console.log(data))
            .catch((err)=>console.log(err))

    console.log("After await 2- thread executes one by one")
}

asyncCall()

console.log("async Execution ends");   */


//create a promise to print user info like - name, address, account number after 3 seconds, using aync and await
// also check when it rejects after 2 second
// analyse how await works as blocking execution
let userInfo={
        name:'anna',
        address:'12 test ln',
        accountNumber:'123',
}
function getDataFromDatabase(){
        return new Promise((resolve,reject) =>{
                setTimeout(()=>{
                        resolve({
                                "myMessage": "resolved",
                                "myCode": 200,
                                "userRecordFromDatabase":userInfo
                        })
                }, 3000)
        })
}

/*
const foo = async () => {
        // do something
      }

      //arrow with 1 arg
const foo2 = async evt => {
        // do something with evt
      }

      //arrow func with multiple args
const foo3 = async (evt, callback) => {
        // do something with evt
        // return response with callback
      }

      //anonymous functio
const foo4 = async function() {
        // do something
      }
*/
/*
const getUserFromDB =  async () => {
        console.log("Call to DB - awaiting")
        let data = await getDataFromDatabase()
            .then((data, err)=>console.log(data))
            .catch((err)=>console.log(err))
        console.log('DB call has completed')
}

getUserFromDB() */

// create one set of map using different types of keys and at leas 
//show the usage of 5 functions (.get, .clear)
// create a list using set and show the usage of 5 functions (.add, .clear)
let myMap=new Map()
myMap.set('student', {name: 'anna',course:'ES6',level:'advanced'})
myMap.set('phone', '12345667890')
myMap.set(123456,'studentID')
console.log('1. ',myMap.get(123456))
console.log('2. ',myMap.size)
console.log('3. ',myMap.delete('phone'))
console.log('4. ',myMap)
console.log('5. ',myMap.values())
console.log('6. ',myMap.clear())
console.log('7. ',myMap)

// create and example of arithmatic operations (addition, substraction, multiply, division), 
//using generator function

