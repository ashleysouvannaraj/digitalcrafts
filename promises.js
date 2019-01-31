function verify(name) {
    return new Promise((resolve,reject) => {
        if(name === "Ashley") { // triple means integer & data type has to match
            resolve(name); 
        } else {
            reject("Invalid name");
        }
    })
}

async function resolvePromise() {
    const name = "Ashley";

    try {
        let result = await verify(name);
        console.log(result);
    } catch(e) {
        console.log('Error', e)
    }
}

resolvePromise();