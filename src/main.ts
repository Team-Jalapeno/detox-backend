import express from 'express';
import dotenv from 'dotenv';
import routes from './routes';
import connectDB from './models/connect';

dotenv.config()

connectDB(process.env.MONGO_URL);

const PORT = process.env.PORT;

const app = express();

app.use(express.urlencoded({
    extended: false,
}));
app.use(express.json());

app.use("/", routes);

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});

