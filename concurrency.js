//concurrency / non-blocking - when we are able to execute different call parallely or without blocking one 
//examples of built in non blocking calls
// callbacks / API's - registered call backs of JS - XHR, Promises, SetTimeout, Setinterval, Async IO operations 
// - (API's)
// event loop - mechanism to move callback output from event queue to callStack once stack is empty
// event queue - queue's the output of callback API's and pushes in FIFO

//example 

console.log("Concurrent Execution Starts!!") //1

setTimeout(function () {
    console.log("First Delayed Execution - No 1") //3

    setTimeout(function () {
        console.log("First Delayed Execution's Timeout - No 1.1") //4
    }, 0)

}, 1000) //

setTimeout(function () {
    console.log("Second Delayed Execution's Timeout - No 2") //5
}, 1000) // if 2000, see what i get

setTimeout(function () {
    console.log("Third Delayed Execution's Timeout - No 3") //6
}, 1000) // if 3000, test

console.log("Concurrent Execution Ends!!") //2