import express, { urlencoded } from "express";
import { configDotenv } from "dotenv";
import { ConnectDB } from "./src/database/connection.js";
import cookieParser from "cookie-parser";
import cors from 'cors';
import { fileURLToPath } from 'url';
import { dirname } from "path";
import path from "path";
import router from "./src/routes/user.routes.js";
import product from "./src/routes/product.routes.js";
import { addproduct } from "./src/controllers/product.controller.js";
/* import { getspec, specification } from "./src/controllers/product.controller.js"; */




const app = express()

app.use(urlencoded({extended:true}))
app.use(express.json());
app.use(cookieParser())
app.use('/api',router);
app.use('/api',product);

configDotenv({
    path: './.env'
})


const port = process.env.PORT || 5000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.use(express.static(path.join(__dirname,'public')))

app.get('/', (req, res) => {
    return res.sendFile(path.join(__dirname,"public","login.html"))
})

/* specification(); */
/* getspec(); */
/* addproduct(); */

ConnectDB()
    .then(() => {
        app.listen(port, () => {
            console.log("Server is Running on Port ", port)
        })
    })
    .catch((error) => {
        console.log("error in DB connection ", error)
    })