import mongoose from 'mongoose'

const connectDB = (uri) => {
    return mongoose.connect(uri).then(db => console.log("DB connected")).catch(err => console.log(err));
}
module.exports = connectDB;