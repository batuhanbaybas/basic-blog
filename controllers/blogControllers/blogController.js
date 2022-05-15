const Post = require("../../models/Post/post")


exports.createBlog = async (req, res) => {
    await Post.create(req.body)
    res.status(201).redirect("/")
}
exports.updateBlog = async (req, res) => {
    const {id} = req.params;
    const {title, content, subtitle} = req.body;
    await Post.findByIdAndUpdate({_id: id}, {
        title,
        subtitle,
        content
    })

    res.status(200).redirect(`/post/${id}`)

}
exports.deleteBlog = async (req, res) => {
    const {id} = req.params;
    await Post.findByIdAndRemove({_id: id})
    res.status(200).redirect("/")

}
exports.getSinglePost = async (req, res) => {
    const {id} = req.params;
    const post = await Post.findById({_id: id})
    res.status(200).render("post", {
        post
    })
}





