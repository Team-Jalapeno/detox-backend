import express from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import routes from './routes';

dotenv.config()

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

