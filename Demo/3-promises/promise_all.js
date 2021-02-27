function createPromises() {
    const promise1 = Promise.resolve(3);
    const promise2 = new Promise((resolve, reject) => setTimeout(reject, 100, 'foo'));
    const promises = [promise1, promise2];
    return promises;
}

async function waitAllPromises() {
    try {

        await Promise.all(createPromises()).
            then((results) => results.forEach((result) => console.log('All result', result.status)));
        // Any of the promises was fulfilled.
        console.log('All promises are resolved');
    } catch (error) {
        // All of the promises were rejected.
        console.log('All promises are rejected');
    }
}

async function waitAllSettled() {
    try {

        await Promise.allSettled(createPromises()).
            then((results) => results.forEach((result) => console.log('All settled result: ', result.status)));
        // Any of the promises was fulfilled.
        console.log('All Settled promises are resolved');
    } catch (error) {
        // All of the promises were rejected.
        console.log('All Settled promises are rejected');
    }
}

waitAllPromises();
waitAllSettled();