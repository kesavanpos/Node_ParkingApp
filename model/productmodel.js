let products = require('../products.json')
const { getModel,writeDatatoFile } = require('../util/util')
const { v4:uuidv4 } = require('uuid')
const {pool} = require('../config/config')

function findAll(){
    return new Promise((resolve,reject) =>{
        pool.query('SELECT * FROM accounts', (error, results) => {
            if (error) {
              reject(error)
            }
            else{
                resolve(results.rows)
            }
          })
    })
}

function findById(id)
{
    return new Promise((resolve,reject) =>{
        const product = products.find((p) => p.id === id)
        resolve(product)
    })
}

function create(product)
{
    return new Promise((resolve,reject) =>{
        const newproduct = {id:uuidv4(), ...product}
        console.log(newproduct)
        products.push(newproduct)
        writeDatatoFile('products.json',products)
        resolve(newproduct) 
    })
}

function update(id,product)
{
    return new Promise((resolve,reject) =>{
      
        const index = products.findIndex((p) => p.id === id)
        products[index] = {id,...product}
        writeDatatoFile('products.json',products)
        resolve(products[index]) 
    })
}

function remove(id)
{
    return new Promise((resolve,reject) =>{      
        products = products.filter((p) => p.id !== id)        
        writeDatatoFile('products.json',products)
        resolve() 
    })
}

module.exports = {
    findAll,
    findById,
    create,
    update,
    remove
}