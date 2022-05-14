
const Post = require("../../models/Post/post")


exports.createBlog = async (req, res) => {
   await Post.create(req.body)
    res.status(201).redirect("/")
}
exports.updateBlog = (req, res) => {
    const {id} = req.params;
    Post.findByIdAndUpdate(id, req.body, {
      new: true
    }).then(blog => {
      res.status(200).json({
        blog: blog
      });
    }).catch(err => {
      res.status(500).json({
        error: err
      });
    });
}
exports.deleteBlog = (req, res) => {
    const {id} = req.params;
    Post.findByIdAndRemove(id).then(blog => {
      res.status(200).json({
        message: "Blog deleted"
      });
    }).catch(err => {
      res.status(500).json({
        error: err
      });
    });
}
exports.getSinglePost =async (req,res) =>{
    const {id} = req.params;
    const post = await Post.findById({_id:id})
    res.status(200).render("post",{
        post
    })
}





