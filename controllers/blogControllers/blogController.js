
const Post = require("../../models/Post/post")

exports.getAllBlogs =async (req,res)=> {
    try{
       const posts = await Post.find()
       res.status(200).render("index",{
           posts
        })
    }catch (e) {
        console.log(e)
    }
}
exports.getSingleBlog = async (req,res)=> {
    try{
        const post = await Post.findById(req.params.id)
        res.status(200).render("post",{
            post
        })
    }catch (e) {
        console.log(e)
    }
}
exports.createBlog = (req, res) => {
    Post.create(req.body).then(blog => {
      res.status(201).json({
        blog: blog
      });
    }).catch(err => {
      res.status(500).json({
        error: err
      });
    });
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






