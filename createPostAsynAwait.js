const posts = [{title: 'POST1'}];
console.log("Asysn await converted");
async function create2ndPost() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push({title: 'POST2'});
            resolve();
        }, 3000);
    });
}

async function create3rdPost() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push({title: 'POST3'});
            resolve();
        }, 2000);
    });
}

async function deletePost() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (posts.length > 0) {
                const poppedElement = posts.pop();
                resolve(poppedElement);
            } else {
                reject("ERROR: ARRAY IS EMPTY");
            }
        }, 1000);
    });
}

async function main() {
    try {
        await create2ndPost();
        const post1 = await deletePost();
        console.log(post1.title);
        await create3rdPost();
        const post2 = await deletePost();
        console.log(post2.title);
        const post3 = await deletePost();
        console.log(post3.title);
        const post4 = await deletePost();
        console.log(post4.title);
    } catch (error) {
        console.log(error);
    }
}

main();
