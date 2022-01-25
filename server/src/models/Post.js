import { Schema, model } from 'mongoose';

const postSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    littleDescription: {
        type: String,
        required: true
    },
    imageUrl: {
        type: String,
        required: true
    },
    cuerpo: {
        type: String,
        required: true
    },
    userID: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    category: [{
        type: String,
        required: true
    }]
}, {
    timestamps: true,
    versionKey: false
})
module.exports = model('Post', postSchema)