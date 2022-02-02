import express from 'express';
import cors from 'cors';
import morgan from 'morgan'
import path from 'path'
import posts from './routes/post.routes'
import PublicCredentials from './routes/auth.routes'
import AdminRoutes from './routes/admin.routes'
import { creatBases } from "./lib/initialSetUp";
import cookieParser from 'cookie-parser';
require('dotenv').config();

cors();
const app = express();
//dev stuff
app.use(cookieParser(`${process.env.CookieSecret}`))
app.use(morgan('dev'));
creatBases()
    //usage of json
app.use(express.json());
//rutes
app.use('/api/v1/posts', posts);
app.use('/api/v1/user', PublicCredentials);
app.use('/api/v1/admin', AdminRoutes)
    //Static files server Load with react stuff
    /*app.use(express.static(path.resolve(__dirname, '../../client/build')));
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, '../../client/build', 'index.html'))
    });*/
export default app;