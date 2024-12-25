import fs from 'fs/promises'
import fsn from 'fs'

let files = await fs.readdir('//Users/Abdullah//Documents/HTML//project-2//Backend_with_Haarry//Express_JS//05_Challange_NodeJS//');


let extensions = [];
for (const item of files) {
    console.log(item);
    if (fsn.existsSync()) {
        
    }
}
