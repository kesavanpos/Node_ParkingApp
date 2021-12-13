const { sequelize, Sequelize } = require("../config/db.config");
const {pool} = require('../config/config')

module.exports = (sequelize,Sequelize) => {
    const Users = sequelize.define('users',{
        userid:{
          type : Sequelize.INTEGER
        },
        firstname: {
            type: Sequelize.STRING
        },
        lastname:{
            type: Sequelize.STRING
        },
        email:{
            type: Sequelize.STRING
        },
        lastupdatedAt:{
          type : Sequelize.DATETIME
        }
    })

    return Users;
}


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