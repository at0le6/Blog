import app from './app';;
import db from './database';
require('dotenv').config();

const port = process.env.PORT || 4000;
const start = async() => {
    try {
        await db(process.env.MONGO_URI);
        app.listen(port);
        console.log("Server started on port", port);
    } catch (error) {
        console.log(error);
    }
}
start();