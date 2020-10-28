const {pool} = require('../config')


function findById(id){
    return new Promise((resolve,reject) =>{
        pool.query(`SELECT * FROM tblUser where userid = ${id}`, (error, results) => {
            if (error) {
              reject(error)
            }
            else{
                resolve(results.rows)
            }
          })
    })
}