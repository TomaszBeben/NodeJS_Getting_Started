const theOneFunc = () => {
    console.log('HELLO')
    return setTimeout(theOneFunc, 4 * 1000);
};

setTimeout(theOneFunc, 4 * 1000);

// Hello after 4 seconds

// Hello after 8 seconds

// You can define only ONE function
