// OS Module
// Give System related information like CPU, memory, etc.

const os = require("os");

// 'll return OS type like Windows, Linux, etc.
console.log("Os Plateform :",os.platform());
// 'll return CPU architecture
console.log("CPU Architecture :",os.arch());
// 'll return the total RAM
console.log("Total Memory :",os.totalmem());
// 'll return the available RAM
console.log("Free Memory :",os.freemem());
// 'll return the user's home directory
console.log("Home Directory :",os.homedir());
// 'll return the uptime of the system in seconds
console.log("Uptime :",os.uptime());






