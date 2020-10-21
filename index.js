const http = require('http')
const { getProducts,getProductById,createProduct,updateProduct,deleteProduct } = require('./controllers/productcontroller')

const {pool} = require('./config')


const server = http.createServer((req,res) =>{

  pool.query('SELECT * FROM accounts', (error, results) => {
    if (error) {
      throw error
    }

    res.writeHead(200,{'Content-Type':'application/json'})
    res.end(JSON.stringify(results.rows));
  })

    // if(req.url === '/api/products' && req.method === 'GET')
    // {
    //     getProducts(req,res);
    // }
    // else if(req.url.match(/\/api\/products\/([0-9]+)/) && req.method === 'GET')
    // {
    //     const Id = req.url.split('/')[3]
    //     getProductById(req,res,Id)
    // }
    // else if(req.url.match(/\/api\/products\/([0-9]+)/) && req.method === 'PUT')
    // {
    //     const Id = req.url.split('/')[3]
    //     updateProduct(req,res,Id);
    // }
    // else if(req.url.match(/\/api\/products\/([0-9]+)/) && req.method === 'DELETE')
    // {
    //     const Id = req.url.split('/')[3]
    //     deleteProduct(req,res,Id);
    // }
    // else if(req.url === '/api/products' && req.method === 'POST')
    // {
    //     createProduct(req,res);
    // }
    // else{
    //     res.writeHead(404,{'Content-Type':'application/json'})
    //     res.end(JSON.stringify({ message:'Route not found' }));
    // }
});

const PORT = process.env.PORT || 5000

server.listen(PORT, () => console.log(`Server is running on port ${PORT}`));