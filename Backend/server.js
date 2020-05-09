const express =  require('express');
const dotenv = require('dotenv');
const cookieParser   = require('cookie-parser')
            


const connectDB = require('./config/db')

const authRoutes = require('./routers/auth');
const productRoutes = require('./routers/product')



const app = express()


dotenv.config({path: './config/.env' })
connectDB()


app.use(express.json())
app.use(cookieParser())
app.use('/api', authRoutes);
app.use('/api', productRoutes)










const PORT = process.env.PORT || 5001
app.listen( PORT, () => console.log(`Server is running on PORT ${PORT}`))