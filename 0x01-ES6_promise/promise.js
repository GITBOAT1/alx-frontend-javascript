let success = (a) => {
    console.log(a + "it Worked")
}

let error = (a) => {
    console.log(a + "It failed")
}

const Promise = num => {
    return new Promise((resolve, reject) => {
        if((num % 2) == 0){
            resolve("success!")
        }
        reject("Faillure!")
    })
}
Promise(100).then(success, error)
Promise(21).then(success, error)