const { getCustomers,getCustomerById } = require('../model/customermodel')

async function getCustomer(req,res)
{
    try{
        // model to fetch customer
       const customer = await getCustomers();
       if(!customer)
       {
        res.writeHead(200,{"content-type":"application/json"});
        res.send(JSON.stringify("Customer Not found"));
       }
       else{
        res.writeHead(200,{"content-type":"application/json"});
        res.send(JSON.stringify(customer));
       }
    }
    catch(e)
    {
        res.writeHead(200,{"content-type":"application/json"});
        res.send(JSON.stringify(e));
    }
}


async function getCustomerById(req,res)
{
    try{
        const cust = await getCustomerById(req.body.Id);
        res.writeHead(200,{"content-type":"application/json"});
        res.send(JSON.stringify(cust));
    }
    catch(e)
    {
        res.writeHead(200,{"content-type":"application/json"});
        res.send(JSON.stringify(e));
    }
}

module.exports = { getCustomer,getCustomerById}