import Post from '../models/Post'

const getPosts = async(req, res) => {
    try {
        res.status(200).json("getPosts")
    } catch (error) {
        res.status(500).json({ msg: "Somthing went wrong" })
    }
}
const getPostsIdUser = async(req, res) => {
    try {
        res.status(200).json("getPostsIdUser")
    } catch (error) {
        res.status(500).json({ msg: "Somthing went wrong" })
    }
}
const updatePost = async(req, res) => {
    try {
        res.status(200).json("updatePost")
    } catch (error) {
        res.status(500).json({ msg: "Somthing went wrong" })
    }
}
const deletePost = async(req, res) => {
    try {
        res.status(200).json("deletePost")
    } catch (error) {
        res.status(500).json({ msg: "Somthing went wrong" })
    }
}
const createPost = async(req, res) => {
    try {

    } catch (error) {
        res.status(500).json({ msg: "Somthing went wrong" })
    }
}
const getPostId = async(req, res) => {
    try {
        res.status(200).json("getPostId")
    } catch (error) {
        res.status(500).json({ msg: "Somthing went wrong" })
    }
}
module.exports = { getPostId, getPostsIdUser, createPost, updatePost, deletePost, getPosts }