const express = require('express')
const dotenv = require('dotenv')
dotenv.config()
const app = express()
const cors = require('cors')
const ConnectDB = require('./config/ConnectDb')
const Route = require('./Routes/Routes')
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors());
ConnectDB()
const PORT = process.env.PORT || 9111
app.listen(PORT , ()=>{
    console.log(`Server is running on port ${PORT}`)
})

app.use('/api/v8', Route)
app.get('/',(req,res)=>{
    res.send('Welcome to Policy Api')
})