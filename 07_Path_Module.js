// Path Module
// Helps in working with file and directory paths.

const path = require("path");

// 'll return the file name 
console.log("File Name :",path.basename(__filename));

// 'll return the directory name
console.log("Directory Name :",path.dirname(__dirname));

// 'll return the file extension
console.log("File Extension :",path.extname(__filename));

// 'll return the parsed path
console.log("Parsed Path :",path.parse(__filename));
