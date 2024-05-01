//7. Create a promise object that get resloved after 
//two seconds and rejected after three. Also it returns five ES6 features on resolved

let ES6Features=["let","const","promises","for-in","for-of"]
let myPromise = new Promise((resolve,reject)=>{

    setTimeout(() => {
        //when I had a ":" after resolve, no error, but it just does not get executed
        //maybe in a website behind page it would show error....? No tested, it does not
        resolve:({
            status:'passed',
            value:ES6Features,
            code:'200'
           // test:'2'
        })
    }, 2000);

    setTimeout(() => {
        reject:({
            status:'in progress',
            value:nothing,
            code:'100'
        })
    }, 3000);
})

console.log(myPromise)

myPromise.then((response, error)=>{
    console.log("execution is successful  ", response) //resolved
}).catch((response, error)=>{
    console.log("execution is failed  ", response) //rejected
})