import express, {Application} from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import { connectDB } from './config/db'
import routes from './routes/index'
const port = process.env.PORT || 3005

dotenv.config();

if (!process.env.PORT) {
    process.exit(1);
}

connectDB();

const app: Application = express();

app.use(cors({ credentials: true })); 
app.use(express.json());
app.use("/mcq", routes);

app.listen(port, () => {
    console.log(`Backend Server Started and Running on Port ${port}...`)
});