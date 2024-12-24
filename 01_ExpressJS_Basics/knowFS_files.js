import fs from 'fs'

fs.writeFile('123', 'Here we are undersatnding the .fs files', (error) => {
   if (error) {
    console.log('There was problem writing the files', error);
       return error
   } else{
    console.log('Hurrah! File written successfully');
    
   }

   // Now let's read the file
   fs.readFile('index.txt', (error, data) => {
      if (error) {
        console.log('There was problem reading the file', error);
        
      } else{
        console.log('The data is: ', data.toString());
        
      }
   })

   // let's append another into it
   fs.appendFile('index.txt', '\n\n\n\n This is appended file', (error, data) => {
      if (error) {
        console.log('There was problem appending the file', error);
        
      } else{
        console.log('The file appended successfully!');
        
      }
   })

   
})