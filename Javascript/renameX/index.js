const fs = require('fs')
const path = require('path')
const replaceThis = "Komal"
const replaceWith = "Piya"
const peview = true 
const folder = __dirname;
try{
        fs.readdir(folder,(err,data)=>{

        // console.log(data);
        for(let index=0 ; index < data.length;index++){
            const item = data[index];
            let oldFile = path.join(folder, item);
            let newFile = path.join(folder, item.replaceAll(replaceThis,replaceWith))
            
            if(!peview){
                fs.rename(oldFile,newFile, ()=>{
                    console.log("Rename successfully")
                })
            }else{
                if("data/" + item !== newFile)  
                console.log("data/" + item + " will be renamed" + newFile)
            }
        }
    })

}catch(err){
    console.error(err);
}