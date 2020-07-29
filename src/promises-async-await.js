// TODO

const apiCall = () => fetch('https://jsonplaceholder.typicode.com/todos/1');

// promise api
apiCall()
    .then(response => response.json())
    .then(json => console.log(json));

asyncApiCall = async () => {
    const res = await apiCall();

    console.log(res);
};


