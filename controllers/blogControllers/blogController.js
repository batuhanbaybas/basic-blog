
const Post = require("../../models/Post/post")

exports.getAllBlogs = (req, res) => {
  Post.find()
    .then(blogs => {
      res.status(200).json({
        blogs: blogs
      });
    })
    .catch(err => {
      res.status(500).json({
        error: err
      });
    });
};
exports.getSingleBlog = (req, res) => {
    const {id} = req.params;
  Post.findById(id)
    .then(blog => {
      if (!blog) {
        return res.status(404).json({
          message: "Blog not found"
        });
      }
      res.status(200).json({
        blog: blog
      });
    })
    .catch(err => {
      res.status(500).json({
        error: err
      });
    });
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






