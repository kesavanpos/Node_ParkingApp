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
        const body = await getModel(req)     
        const { title,description,price} = JSON.parse(body)        
        const product = { title,description,price}
        res.writeHead(201,{'Content-Type':'application/json'})
        res.end(JSON.stringify(product));       
    } catch (error) {
        res.writeHead(200,{'Content-Type':'application/json'})
        res.end(JSON.stringify({message : error.toString()}));
    }
}

async function updateProduct(req,res,Id)
{
    try {

        const product = productModel.findById(Id);

        if(!product)
        {
            res.writeHead(201,{'Content-Type':'application/json'})
            res.end(JSON.stringify({message : "Product Not Found !"}));       
        }
        else
        {
            const body = await getModel(req)     
            const { title,description,price} = JSON.parse(body)

            const product = { title,description,price}

            const updateproduct = {
                title : title || product.title,
                description : description || product.description,
                price : price || product.price
            }

            const updatedproduct = await productModel.update(id,updateproduct);               
            res.writeHead(200,{'Content-Type':'application/json'})
            res.end(JSON.stringify(updatedproduct)); 
        }
        
    } catch (error) {
        res.writeHead(200,{'Content-Type':'application/json'})
        res.end(JSON.stringify(error));   
        console.log(error)
    }
}

async function deleteProduct(req,res,id)
{
    try {
        await productModel.remove(id);
        res.writeHead(201,{'Content-Type':'application/json'})
        res.end(JSON.stringify({message : `Product ${id} removed successfully !`}));       
    } catch (error) {
        res.writeHead(200,{'Content-Type':'application/json'})
        res.end(JSON.stringify({message : error.toString()}));
    }
}


module.exports = {
    getProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct
}