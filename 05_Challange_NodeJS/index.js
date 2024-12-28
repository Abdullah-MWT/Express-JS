import fs from 'fs/promises'
import fsn from 'fs'
import path from 'path';

let basePath = '//Users/Abdullah//Documents/HTML//project-2//Backend_with_Haarry//Express_JS//05_Challange_NodeJS//'
let files = await fs.readdir(basePath);



for (const file of files) {


    let ext = file.split('.')[file.split('.').length -1];
    let oldPath = `${basePath}${file}`;
    let newPath = `${basePath}${ext}/${file}`
    
    
    
    if (ext != 'js' && ext != 'json' && file.split('.').length > 1) {
        if (fsn.existsSync(path.join(basePath, ext))) {
        fs.rename(oldPath, newPath);
    } else{
       fs.mkdir(ext)
       fs.rename(oldPath, newPath);
    }
        
    }
    
    
}
