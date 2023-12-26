const express = require('express')
const dotenv = require('dotenv');
const connectDB = require('./src/config/db');
const cors = require('cors')
const authRoute = require('./src/routes/authRoute');
const courseRoute = require('./src/routes/courseRoute');
const questionRoute = require('./src/routes/questionRoute');
const port = process.env.PORT || 3005

dotenv.config();
if (!process.env.PORT) {
    process.exit(1);
}

connectDB();
const app = express();
app.use(cors({ credentials: true })); 
app.use(express.json());
app.use("/api/auth", authRoute);
app.use("/api/course", courseRoute);
app.use("/api/question", questionRoute);
app.listen(port, () => {
    console.log(`Backend Server Started and Running on Port ${port}...`)
});