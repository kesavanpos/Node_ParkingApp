const { sequelize, Sequelize } = require("../config/db.config");
const {pool} = require('../config/config')

module.exports = (sequelize,Sequelize) => {
    const Customer = sequelize.define('customer',{
        firstname: {
            type: Sequelize.STRING
        },
        lastname:{
            type: Sequelize.STRING
        },
        age:{
            type: Sequelize.INTEGER
        }
    })

    return Customer;
}


function getCustomers()
{
    return new Promise ((resolve,reject) =>{
        pool.query("SELECT * FROM CUSTOMERS",(error,results) => {
            if(error)
            {
                reject(error)
            }
            else{
                resolve(results.rows)
            }
        })
    })  
}

function getCustomerById(id)
{
    return new Promise((resolve,reject) => {
        pool.query(`SELECT * FROM CUSTOMER WHERE CUSTOMERID=${id}`,(error,result) =>{
            if(error)
            {
                reject(error);
            }
            else
            {
                resolve(result.rows);
            }
        })
    })
}

module.exports = { getCustomers,getCustomerById }