// Print "Hello World"
// Every second
// And stop after 5 times

// After 5 times. Print "Done" and let Node exit.

const func = (arg) => {
    setTimeout(
        for (let i = 0; i <= arg; i++) {
            i < 5 ? console.log('hello') : console.log('done');
        }, 1000)
}
func(5)