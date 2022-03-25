const EventEmitter = require('events');

const myEmiter = new EventEmitter();

myEmiter.emit('TEST_EVENT')

myEmiter.on('TEST_EVENT', () => {
    
})