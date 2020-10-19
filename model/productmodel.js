const products = require('../products.json')
const { getModel,writeDatatoFile } = require('../util/util')
const { v4:uuidv4 } = require('uuid')

function findAll(){
    return new Promise((resolve,reject) =>{
        resolve(products)
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

module.exports = {
    findAll,
    findById,
    create,
    update
}