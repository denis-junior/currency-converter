import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import {routesModule} from "./routes/index"


const app = express();

app.use(cors())
app.use(express.json())
app.use(routesModule())


//connection with the database
mongoose
  .connect(
    `mongodb+srv://admin:12345@cluster0.rkbnnk6.mongodb.net/?retryWrites=true&w=majority`
  )
  .then(() => {
    console.log("mongoDB conection is working");
    app.listen(5000); //if conection with DB is ok, start the backend
  })
  .catch(err => console.log(err));

export {app}