import express from "express";
import dotnev from "dotenv";
import { AppDataSource } from "./data-source";
import { setupSwagger } from "./swagger";
import userRouter from "./user/UserRouter";

dotnev.config();
const app = express();
const port = process.env.PORT;
setupSwagger(app);


app.use(express.json());
app.use("/users", userRouter);



app.listen(port, async ()=>{
    AppDataSource.initialize()
        .then(() => {
            console.log('[orm]: orm task initialize');
        })
        .catch((error) => {
            console.error('Error during Data Source initialization:', error.message);
            console.error(error.stack);
        });
    console.log(`[server]: task-service is running at http://localhost:${port}`)
})