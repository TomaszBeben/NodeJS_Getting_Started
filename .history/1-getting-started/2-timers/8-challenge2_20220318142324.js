// Print "Hello World"
// Every second
// And stop after 5 times

// After 5 times. Print "Done" and let Node exit.

let counter = 0;
const intervalId = setInterval(
    ()=>{
        console.log('hello');
        counter++

        if(counter === 5){
        clearInterval(intervalId)
        console.log('done');
    }
    }, 1000
    
)