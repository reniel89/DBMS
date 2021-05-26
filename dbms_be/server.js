import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import dotenv from 'dotenv'
import userRoutes from './routes/userRoutes.js'

dotenv.config()
const app = express()

// database connection
try {
    const db = await mongoose.connect(process.env.MONGODB_URI, {
        useUnifiedTopology: true,
        useNewUrlParser: true,
        useCreateIndex: true,
    });

    console.log(`MongoDB Connected: ${db.connection.host}`)
} catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
}

app.use(cors())
app.use(express.json())
app.use('/api/users', userRoutes)

// app.use('/', (req, res) => {
//     res.send("server is ready");
// });

const port = process.nextTick.PORT || 5000;
app.listen(port, () => {
    console.log(`server running at http://localhost:${port}`);
})