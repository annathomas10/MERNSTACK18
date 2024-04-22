//Create a Promise
const myPromise1 = new Promise((resolve, reject) => {
  setTimeout(resolve, 2000, "King");
  setTimeout(reject, 1000, "King");
  
});

// Create another Promise
const myPromise2 = new Promise((resolve, reject) => {
  setTimeout(resolve, 500, "Queen");
});


//eg use case for the 2 uses below : a website with 3 panels. But want to display
//only if all pass etc. His code is diff a bit

// All have to pass or all fail
/*Promise.all([myPromise1, myPromise2]).then((x) => {
  console.log('all done')
}).catch((response, error)=>{
    console.log("execution is failed  ", response) //rejected
})*/

//even if one passes, Promise will say "all is good"
Promise.allSettled([myPromise1, myPromise2]).then((x) => {
    console.log('all done')
  }).catch((response, error)=>{
      console.log("execution is failed  ", response) //rejected
  })

