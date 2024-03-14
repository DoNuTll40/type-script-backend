
import "dotenv/config"
import express from 'express'
import cors from 'cors'
import errorHandler from "./middlewares/error";
import todoRoute from "./routes/todo-route";

const web = express();

web.use(cors());

web.use(express.json());

web.use("/todo", todoRoute)

web.use(errorHandler)

const port = process.env.PORT;

web.listen(port, () => {
    console.log(`Server run on Port : ${port} - URL : http:localhost:${port}/`);
})
