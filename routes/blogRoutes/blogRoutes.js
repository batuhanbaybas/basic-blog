const express = require("express")
const blogController = require("../../controllers/blogControllers/blogController")

const router = express.Router()


exports.getAllBlogs = router.get("/", blogController.getAllBlogs)
exports.getSinglePost = router.get("/post/:id", blogController.getSingleBlog)
exports.updatePost = router.put("/post/:id/edit", blogController.updateBlog)
exports.deletePost = router.delete("/post/:id/delete", blogController.deleteBlog)
exports.createPost = router.post("/post/new", blogController.createBlog)


module.exports = router