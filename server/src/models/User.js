import { Schema, model } from 'mongoose';
import bcrypt from "bcryptjs";
const userSchema = new Schema({
    email: {
        type: String,
        unique: true,
        required: true,
    },
    username: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    roles: [{
        type: Schema.Types.ObjectId,
        ref: "Role"
    }]
}, { versionKey: false })
userSchema.statics.encryptPassword = async(password) => {
    const salt = await bcrypt.genSalt(13);
    return await bcrypt.hash(password, salt);
}
userSchema.statics.comparePassword = async(password, recivePassword) => {
    return await bcrypt.compare(password, recivePassword)
}
export default model('User', userSchema);