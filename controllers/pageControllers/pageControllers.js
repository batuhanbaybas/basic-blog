const Post = require("../../models/Post/post")

exports.getHomePage = async (req, res) => {
    const posts = await Post.find().sort({date: -1})
    res.render("index", {
        title: "Home",
        posts
    })
};


exports.getAboutPage = (req, res) => {
    res.render('about');
}
exports.getNewPostPage = (req, res) => {
    res.render('add_post');
}
exports.getEditPostPage = async (req, res) => {
    const {id} = req.params;
    const post = await Post.findById({_id: id})
    res.status(200).render('edit_post', {
        title: "Edit Post",
        post
    })
}