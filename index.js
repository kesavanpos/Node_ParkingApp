const http = require('http')

const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const user = require('./routes/user')
const product = require('./routes/product')
const auth = require('./routes/auth')

const {verifyUser} = require('./routes/middleware')

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use(cors())


app.use("/api/v1/products",verifyUser,product)
app.use("/api/v1/auth",auth)

// before implmenting middleware and all functions
// app.route('/api/products')
//       .get(getProducts)
//       .post(createProduct)

// app.route('/api/user')
//       .get(getUser)
//       .post(createUser)
      

const PORT = process.env.PORT || 5000

app.listen(PORT,() => {
  console.log(`Server is listening ${PORT}`)
})

// Without Express framework with plain javascript

// const server = http.createServer((req,res) =>{  
//     if(req.url === '/api/products' && req.method === 'GET')
//     {
//         getProducts(req,res);
//     }
//     else if(req.url.match(/\/api\/products\/([0-9]+)/) && req.method === 'GET')
//     {
//         const Id = req.url.split('/')[3]
//         getProductById(req,res,Id)
//     }
//     else if(req.url.match(/\/api\/products\/([0-9]+)/) && req.method === 'PUT')
//     {
//         const Id = req.url.split('/')[3]
//         updateProduct(req,res,Id);
//     }
//     else if(req.url.match(/\/api\/products\/([0-9]+)/) && req.method === 'DELETE')
//     {
//         const Id = req.url.split('/')[3]
//         deleteProduct(req,res,Id);
//     }
//     else if(req.url === '/api/products' && req.method === 'POST')
//     {
//         createProduct(req,res);
//     }
//     else{
//         res.writeHead(404,{'Content-Type':'application/json'})
//         res.end(JSON.stringify({ message:'Route not found' }));
//     }
// });



// server.listen(PORT, () => console.log(`Server is running on port ${PORT}`));