require('dotenv').config()


const express = require('express')
const app = express()
const helmet = require('helmet')
require('./database/database');


const cookieParser = require('cookie-parser')

const router = require('./routes/index')



const port = process.env.PORT  || 3000;

app.use(helmet())

// Set view engine
app.set('view engine', 'ejs');
app.use(express.static('public'))

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cookieParser())


app.use(router)

app.use((error,req,res,next)=>{
    const {message, status} = error;
    res.status(status).json({error:message})
})
app.listen(port,()=>{
    console.log(port)
})