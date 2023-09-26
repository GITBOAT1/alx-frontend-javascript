let success = (a) => {
    console.log(a + "it Worked")
}

let error = (a) => {
    console.log(a + "It failed")
}

const myPromise = num => {
    return new Promise((resolve, reject) => {
        if ((num % 2) == 0) {
            resolve("success!")
        } else {
            reject("Failure!")
        }
    })
}

myPromise(100).then(success, error)
myPromise(21).then(success, error)
