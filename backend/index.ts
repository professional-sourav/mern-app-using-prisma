import express, { Express, Request, Response } from "express";
import dotenv from 'dotenv'
import router from './route'
import cors from "cors";

dotenv.config();

const app: Express = express()
const port = process.env.PORT

// const options: cors.CorsOptions = {
//   origin: ['http://127.0.0.1/']
// };

app.use(cors())
app.use(express.json())
app.use('/', router)

app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
})