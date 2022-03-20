// Print "Hello World"
// Every second
// And stop after 5 times

// After 5 times. Print "Done" and let Node exit.

const func = () => {
    for (let i = 0; i <= 5; i++){
       const delay = () => i < 5 ? console.log('hello') : console.log('done')
    }
}
func()