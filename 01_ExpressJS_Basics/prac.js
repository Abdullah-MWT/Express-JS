// Write the file synchronously
// console.log('Starting');
// fs.writeFileSync('dev2.txt', 'Here we are writing the file synchronously')
// fs.readFileSync('dev2.txt')
// console.log('Ending');



const fs = require('fs');

console.log('Starting');

// Write the file asynchronously
fs.writeFile('dev.txt', 'Abdullah is learning Back-End Development', (error) => {
    if (error) {
        console.log('Error writing file:', error);
        return;
    }
    console.log('File written successfully.');

    // Read the file asynchronously after writing
    fs.readFile('dev.txt', 'utf8', (error, data) => {
        if (error) {
            console.log('Error reading file:', error);
            return;
        }
        console.log('File data:', data);
        console.log('Read completed');
    });
});

console.log('Ending');

// Now if we want to write and read 10,20 files like that, then it would become very much complex and there would be callbakc inside callbach which is called Callback Hell. (Avoid Callback hell.)

// instead use .appendFile()
fs.appendFile('dev.txt', ' and he likes Coding', (err, data) => {
  console.log(data);
  
})


