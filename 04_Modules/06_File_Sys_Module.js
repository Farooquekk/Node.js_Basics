// 1 File System Module (fs)
// Used for working with files (reading, writing, deleting, etc.).


// const fs = require('fs');

// // writing to a file 
// fs.writeFile('test_01.txt','Hello, this is a Test file 01!');

// // reading from a file
// const fileData = fs.readFileSync('test_01.txt','utf-8');
// console.log(fileData);

const { error } = require("console");
const fs = require("fs");

// try {
//   fs.writeFile("test_01.txt", "Hello, this is a Test file 01!", (err) => {
//     if (err) {
//       console.error("Error writing to file:", err);
//     }
//   });

//   const fileData = fs.readFileSync("test_01.txt", "utf-8");
//   console.log(fileData);
// } catch (err) {
//   console.error("Error reading from file:", err);
// }

// append to a file
// fs.appendFile("test_01.txt","\nThis is an appended text!",(error)=>{
//   console.log("Data appended successfully!");
  
//   if(error){
//     console.error("Error appending to file:",error);
//   }
// })

// rename a file
// fs.rename("test_01.txt","test_02.txt",(error)=>{
//   console.log("File renamed successfully!");
//   if(error){
// 			console.error("Error renaming file:", error);
// 		}
// })

// copy a file
fs.copyFile("test_02.txt","test_02_copy.txt",(error)=>{
console.log("File copied successfully!");
if(error){
  console.error("Error copying file:",error);
}

})



