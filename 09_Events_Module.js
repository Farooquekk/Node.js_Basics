// Events Module
// Handles event-driven programming in Node.js.

const EventEmitter = require("events");
const emitter = new EventEmitter();

// defining an event
emitter.on("greet",(name)=>{
    console.log("Hi",name);
})
// Emit the event
emitter.emit("greet","Farooque Sajjad");
