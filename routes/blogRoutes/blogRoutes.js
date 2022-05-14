const express = require("express")


const router = express.Router()



exports.getAllBlogs = router.get("/")
exports.getSinglePost = router.get("/post/:id")
exports.updatePost = router.put("/post/:id/edit")
exports.deletePost = router.delete("/post/:id/delete")
exports.createPost = router.post("/post/new")



export default router