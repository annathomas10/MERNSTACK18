//9.  Use the question #7 to build promises using async and await - with multithread

let ES6Features=["let","const","promises","for-in","for-of"]

function getDataFromDatabase(){
    return new Promise((resolve,reject) =>{
            setTimeout(()=>{
                    resolve({
                            "myMessage": "resolved",
                            "myCode": 200,
                            "userRecordFromDatabase":ES6Features
                    })
            }, 2000)
            setTimeout(()=>{
                reject({
                        "myMessage": "error",
                        "myCode": -1,
                        "userRecordFromDatabase":nothing
                })
        }, 3000)
    })
}
