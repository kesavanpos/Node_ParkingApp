const productModel = require('../model/productmodel')
const { getModel } = require('../util/util')

async function getProducts(req,res)
{
    try {        
        const products = await productModel.findAll()        
        res.writeHead(200,{'Content-Type':'application/json'})
        res.end(JSON.stringify(products));       
    } catch (error) {
        res.writeHead(200,{'Content-Type':'application/json'})
        res.end(JSON.stringify(error));   
    }
}

async function getProductById(req,res,id)
{
    try {                
        const product = await productModel.findById(id)        
        if(!product)
        {
            res.writeHead(200,{'Content-Type':'application/json'})
            res.end(JSON.stringify({message: "Product Not Found"})); 
        }
        else{
            res.writeHead(200,{'Content-Type':'application/json'})
            res.end(JSON.stringify(product));       
        }
    } catch (error) {
        res.writeHead(200,{'Content-Type':'application/json'})
        res.end(JSON.stringify(error));   
    }
}

async function createProduct(req,res)
{
    try {
        const newProduct = await getModel(req)        
        const product = await productModel.create(newProduct);   
        console.log(product)             
        res.writeHead(201,{'Content-Type':'application/json'})
        res.end(JSON.stringify(product));       
    } catch (error) {
        res.writeHead(200,{'Content-Type':'application/json'})
        res.end(JSON.stringify(error));   
        console.log(error)
    }
}

module.exports = {
    getProducts,
    getProductById,
    createProduct
}