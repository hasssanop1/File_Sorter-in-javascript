import fs from "fs/promises";
import fsn from "fs"
import { exit } from "process";
import path from "path";
import { isReadable } from "stream";
const basepath = "c:/lectures/vid 91 and 93"


let files = await fs.readdir(basepath);
console.log(files);

let extension = []
for (const item of files) {
    console.log("running for", item )
    let ext = item.split(".")[item.split(".").length - 1]
    if(ext !="js" && ext!="json" && item.split(".").length > 1)
    console.log(ext)
    if (fsn.existsSync(path.join(basepath , ext)) && ext !="js" && ext !="json"){
        // move the file to this directory if its not a json or js file 
        fs.rename(path.join(basepath, item), path.join(ext, item))
    }
    else {
        fs.mkdir(ext)
    }


}

