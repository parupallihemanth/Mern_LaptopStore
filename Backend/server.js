const express =  require('express');
const dotenv = require('dotenv');
            


const connectDB = require('./config/db')



const app = express()


dotenv.config({path: './config/.env' })
connectDB()














const PORT = process.env.PORT || 5001
app.listen( PORT, () => console.log(`Server is running on PORT ${PORT}`))