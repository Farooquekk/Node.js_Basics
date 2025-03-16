
// Not Working
// var Farooquekk  = await fetch(`https://randomuser.me/api/`);
// var FarooquekkData = await Farooquekk.json();
// console.log(FarooquekkData);

// Working
// async function fetchData() {
//   var Farooquekk = await fetch(`https://randomuser.me/api/`);
//   var FarooquekkData = await Farooquekk.json();
//   console.log(FarooquekkData);
// }

// fetchData();


// Synchronous code runs line by line, meaning each step waits for the previous one to finish before moving forward. On the other hand, asynchronous code doesn't block the execution. Instead of waiting, it gets sent to the background (side stack) while the rest of the synchronous code continues running. Once all synchronous tasks are done, the program checks if the asynchronous tasks have completed. If they have, their results are brought back and executed. This way, the program remains efficient and doesn't get stuck waiting for slow operations like fetching data from a server.

async function abcd(){
var blob = await fetch(`https://randomuser.me/api/`);
var ans = await blob.json();
console.log(ans);
}

abcd();