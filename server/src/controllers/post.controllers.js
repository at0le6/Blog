import Post from '../models/Post'

const getPosts = async(req, res) => {
    try {
        const posts = await Post.find();
        res.status(200).json({ posts });
    } catch (error) {
        res.status(500).json({ msg: "Somthing went wrong" })
    }
}
const getPostsIdUser = async(req, res) => {
    try {
        const { id } = req.params
        const posts = await Post.find({ userID: { $in: id } })
        if (!posts || posts.length == 0) {
            return res.status(404).json({ msg: "This user have 0 post or dont exist" })
        }
        res.status(200).json({ posts });
    } catch (error) {
        res.status(500).json({ msg: "Somthing went wrong" })
    }
}
const updatePost = async(req, res) => {
    try {
        const { id } = req.params;
        console.log(req.body)
        const post = await Post.findByIdAndUpdate(id, req.body, {
            new: true,
            runValidators: true
        });
        if (!post) {
            return res.status(404).json({ msg: `Post with ID:${id} not found` })
        }
        res.status(200).json({ post });
    } catch (error) {
        res.status(500).json({ msg: "Somthing went wrong" })
    }
}
const deletePost = async(req, res) => {
    try {
        const { id } = req.params;
        const post = await Post.findByIdAndDelete(id);
        if (!post) {
            return res.status(404).json({ msg: `Post with ID:${id} not found` })
        }
        res.status(204).json("Deleted");
    } catch (error) {
        res.status(500).json({ msg: "Somthing went wrong" })
    }
}
const createPost = async(req, res) => {
    try {
        const { title, littleDescription, imageUrl, cuerpo, category } = req.body;
        if (!title || !littleDescription || !imageUrl || !cuerpo || !category) {
            return res.status(500).json({ msg: "Bad sending info" })
        }
        if (!Array.isArray(category)) {
            return res.status(500).json({ msg: "Bad sending category field" })
        }
        const post = new Post({
            title,
            littleDescription,
            imageUrl,
            cuerpo,
            userID: req.userId,
            category
        })
        const createPost = await Post.create(post);
        res.status(201).json({ createPost });
    } catch (error) {
        res.status(500).json({ msg: "Somthing went wrong" })
    }
}
const getPostId = async(req, res) => {
    try {
        const { id } = req.params;
        const post = await Post.findById(id)
        if (!post) {
            return res.status(404).json({ msg: `Post with ID:${id} not found` })
        }
        res.status(200).json({ post });
    } catch (error) {
        res.status(500).json({ msg: "Somthing went wrong" })
    }
}
const getPostUser = async(req, res) => {
    try {
        const id = req.userId;
        const posts = await Post.find({ userID: { $in: id } })
        if (!posts) {
            return res.status(404).json({ msg: `Post with ID:${id} not found` })
        }
        res.status(200).json({ posts });
    } catch (error) {
        res.status(500).json({ msg: "Somthing went wrong" })
    }
}
module.exports = { getPostId, getPostsIdUser, createPost, updatePost, deletePost, getPosts, getPostUser }