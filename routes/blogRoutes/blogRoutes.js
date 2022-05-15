const express = require("express")
const blogController = require("../../controllers/blogControllers/blogController")

const router = express.Router()

exports.postDetail =router.get("/:id", blogController.getSinglePost)
exports.createPost = router.post("/new", blogController.createBlog)
exports.updatePost = router.put("/edit/:id", blogController.updateBlog)
exports.deletePost = router.delete("/delete/:id", blogController.deleteBlog)


module.exports = router