const EventEmitter = require('events');

const myEmiter = new EventEmitter();

myEmiter.emit('TEST_EVENT')

myEmiter.on('TEST_EVENT', () => {
    console.log('TEST_EVENT was fired');
})
myEmiter.on('TEST_EVENT', () => {
    console.log('TEST_EVENT was fired');
})
myEmiter.on('TEST_EVENT', () => {
    console.log('TEST_EVENT was fired');
})

myEmiter.emit('TEST_EVENT')

