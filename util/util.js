const fs = require('fs')

function writeDatatoFile(filename,content)
{
    fs.writeFileSync(filename,JSON.stringify(content),'utf-8',(err) => {
        if(err){
            console.log(err)
        }
    })
}

function getModel(req)
{   
       return new Promise((resolve,reject) =>{
           try{
            let body = '';

            req.on('data',(chunk) =>{
                body += chunk.toString()
            })
    
            req.on('end',() =>{
                resolve(body)
            })
        }
        catch(e)
        {
            reject(e)
        }
    })
}

module.exports = {
    writeDatatoFile,
    getModel
}