require('dotenv').config()

const {Pool} = require('pg')
const isProduction = process.env.NODE_ENV === 'production'

const DATABASE_URL  = process.env.DATABASE_URL

const connectionString = `postgres://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_DATABASE}`

const pool = new Pool({
  connectionString: isProduction ? DATABASE_URL : connectionString,
  ssl: { rejectUnauthorized: false }
})

module.exports = {pool}