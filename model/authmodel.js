const jwt = require('jsonwebtoken')

const login = (req,res) =>{

    return new Promise((resolve,reject) =>{       
            try{
                //use the payload to store information about the user such as username, user role, etc.
                let payload = {username: req.body.username}
               
                //create the access token with the shorter lifespan
                let accessToken = jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET, {
                    algorithm: "HS256",
                    expiresIn: process.env.ACCESS_TOKEN_LIFE
                })

                //create the refresh token with the longer lifespan
                let refreshToken = jwt.sign(payload, process.env.REFRESH_TOKEN_SECRET, {
                    algorithm: "HS256",
                    expiresIn: process.env.REFRESH_TOKEN_LIFE
                })
                resolve(refreshToken)
            }
            catch(e)
            {
                reject(e)
            }
    })
}

const refresh = (req,res) =>{

}

module.exports = {
    login,
    refresh
}