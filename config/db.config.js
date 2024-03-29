const env = require('./config');
const sequelize = require('sequelize');
const {customer} = require("../model/customermodel")
const { users } = require("../model/usermodel")

const seq = new sequelize(env.database,env.username,env.password,{
    host: env.host,
    dialect:env.dialect,
    operatorsAliases:false,
    pool:{
        max:env.max,
        min:env.pool.min,
        acquire:env.pool.acquire,
        idle:env.pool.idle
    }
})

const db = {};

db.Sequelize =  Sequelize;
db.sequelize  = seq;

db.Customers = customer(sequelize,Sequelize);
db.Users = users(sequelize,this.Sequelize);

module.exports = db;
