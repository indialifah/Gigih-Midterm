import express from 'express';
import dotenv from 'dotenv';

import commentRouter from './routes/Comment';
import productRouter from './routes/Product';
import videoRouter from './routes/Video';


dotenv.config();

const start = async() => {
    const app = express();

    const mongoHost = process.env.MONGODB_HOST;
    const db_name = process.env.DB_NAME;

    await mongodbConn(mongoHost, db_name);


    app.use(express.json());

    app.use(commentRouter);
    app.use(productRouter);
    app.use(videoRouter);

    app.listen(3000, () => {
        console.log(`Server running on port 3000`);
    })
};

start();