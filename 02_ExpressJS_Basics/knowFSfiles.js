import { log } from 'console';
import fs from 'fs'

fs.writeFile('prac.txt', 'Hi! we are still practicing this code', (error) => {
   if (error) {
    console.log('There was problem writing file', error);
   } else{
    console.log('Done bro!');
    
   }
});

fs.readFile('prac.txt', (error, data) => {
    if (error) {
        console.log('There was problem reading the file');
        
    }else{
        console.log('The data is:', data.toString());
        
    }
} )

// Append another file into it
fs.appendFile('prac.txt', ' And yes! we have appended this line', (error) => {
if (error) {
    console.log('There was problem appending the file');
    
}
})