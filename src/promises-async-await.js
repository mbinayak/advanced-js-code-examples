'use strict';

const apiCall = () => fetch('https://jsonplaceholder.typicode.com/todos/1');

// promise api
apiCall()
    .then(response => response.json())
    .then(json => console.log(json));

asyncApiCall = async () => {
    const res = await apiCall();

    console.log(res);
};

asyncApiCall();


// creating an async task
/*
myAsyncTask: async task will call resolve fucnction(resFunc) on success
*/
const myAsyncTask = () => new Promise((resFunc, rejFunc) => {
    try {
        setTimeout(() => resFunc(), 1000);
    } catch (e) {
        rejFunc(e);
    }
});

/*
myAsyncTaskInverse: Inverse async task will call reject function(rejFunc) on success
*/
const myAsyncTaskInverse = () => new Promise((resFunc, rejFunc) => {
    try {
        setTimeout(() => rejFunc(), 1000);
    } catch (e) {
        console.log(e);
        resFunc();
    }
});

try {
    myAsyncTask().then(() => {
        console.log('Promise1 resolved!');
    }).catch(e => {
        console.log(`Error while fullfilling promise: ${e.message}`);
    });
} catch (e) {
    console.log(`Promise1 error caUGHT! ${e.message}`);
}

try {
    myAsyncTaskInverse().then(() => {
        console.log('Promise2 resolved!');
    });
} catch (e) {
    console.log(`Promise2 error caUGHT! ${e.message}`);
}

try {
    myAsyncTask().then(() => {
        console.log('Inverse Promise1 resolved!');
    }).catch(() => {
        console.log('Inverse Promise1 catch function- rejFunc executed');
    });
} catch (e) {
    console.log(`Inverse Promise1 error caUGHT! ${e.message}`);
}

try {
    myAsyncTask().then(() => {
        console.log('Inverse Promise2 resolved!');
    });
} catch (e) {
    console.log(`Inverse Promise2 error caUGHT! ${e.message}`);
}


