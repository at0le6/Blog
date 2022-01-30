import User from '../models/User'
import Role from "../models/Role";
import jwt from "jsonwebtoken";
import cookies from 'cookie';;


const signIn = async(req, res) => {
    try {
        const { email, password } = req.body;
        const userfound = await User.findOne({ email }).populate('roles');
        if (!userfound) {
            return res.status(404).json({ msg: "User found" })
        }
        const comparePassword = await User.comparePassword(password, userfound.password);
        if (!comparePassword) {
            return res.status(401).json({ msg: "Invalid password" })
        }
        const token = jwt.sign({ id: userfound._id }, process.env.SECRETtJWT, { expiresIn: 86400 })
        res.cookie('token', `${token}`, { expires: new Date(Date.now() + 86400), httpOnly: true });

        res.status(200).json({ token });
    } catch (error) {
        res.status(500).json({ msg: "Somthing went wrong" })
    }
}
const publicsignUp = async(req, res) => {
    const { email, password, username } = req.body;
    if (!email || !password || !username) {
        return res.status(403).json({ msg: "Incomplete data model send" })
    }
    const newBaseUser = new User({
        email,
        username,
        password: await User.encryptPassword(password)
    })
    const role = await Role.findOne({ name: "user" });
    newBaseUser.roles = [role._id];
    const user = await User.create(newBaseUser);
    const token = jwt.sign({ id: newBaseUser._id }, process.env.SECRETtJWT, { expiresIn: 86400 })
    res.cookie('token', `${token}`);
    res.status(200).json({ token });
}
const privatesignUp = async(req, res) => {
    const { email, password, username, roles } = req.body;
    if (!email || !password || !username || !roles) {
        return res.status(403).json({ msg: "Incomplete data model send" })
    }
    const newBaseUser = new User({
        email,
        username,
        password: await User.encryptPassword(password)
    })
    const foundRoles = await Role.find({ name: { $in: roles } })
    newBaseUser.roles = foundRoles.map(e => e._id);
    const user = await User.create(newBaseUser);
    const token = jwt.sign({ id: newBaseUser._id }, process.env.SECRETtJWT, { expiresIn: 86400 })
    res.cookie('token', `${token}`);
    res.status(200).json({ token });
}
const updateUser = async(req, res) => {
    try {
        const { roles, id } = req.body
        if (!roles || !id) {
            return res.status(403).json({ msg: "Incomplete data model send" })
        }
        const findUser = await User.findById(id);
        if (!findUser) {
            return res.status(404).json({ msg: "User found" })
        }
        const updated = await Role.find({ name: { $in: roles } })
        const changeRoles = await User.findByIdAndUpdate(id, { roles: updated }, { new: true, runValidators: true })
        res.status(200).json({ changeRoles });
    } catch (error) {
        res.status(500).json({ msg: "Somthing went wrong" })
    }
}
module.exports = { updateUser, privatesignUp, publicsignUp, signIn }