const authmodel = require('../model/authmodel')


const login = async (req,res) =>{

    try{
        const { username,password } = req.body;    
    
        if(username && password)
        {
            const accessToken = await authmodel.login(req,res);
            res.cookie("jwt", accessToken, {secure: true, httpOnly: true})
            res.next()
        }
        else{
            console.log(username)
            return res.status(401).send()
        }
    }
    catch(e)
    {
        res.writeHead(200,{'Content-Type':'application/json'})
        res.end(JSON.stringify(e)); 
    }
}

const refresh = (req,res) =>{

}

module.exports = {
    login,
    refresh
}



