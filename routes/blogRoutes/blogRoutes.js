const express = require("express")
const blogController = require("../../controllers/blogControllers/blogController")

const router = express.Router()


exports.getAllBlogs = router.get("/", blogController.getAllBlogs)
exports.getSinglePost = router.get("/:id", blogController.getSingleBlog)
exports.updatePost = router.put("/:id/edit", blogController.updateBlog)
exports.deletePost = router.delete("/:id/delete", blogController.deleteBlog)
exports.createPost = router.post("/new", blogController.createBlog)


module.exports = router