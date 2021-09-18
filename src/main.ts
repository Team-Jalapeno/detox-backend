import express from 'express';
import dotenv from 'dotenv';
import routes from './routes';

dotenv.config()

const PORT = process.env.PORT;

const app = express();

app.use("/", routes);

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});

