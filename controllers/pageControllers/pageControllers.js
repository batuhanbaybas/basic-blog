const Post = require("../../models/Post/post")

exports.getHomePage =  async (req, res) => {
   const posts = await Post.find().sort({date: -1})
res.render("index", {
    title: "Home",
    posts
})};


exports.getAboutPage = (req, res) => {
    res.render('about');
}
exports.getNewPostPage = (req, res) => {
    res.render('add_post');
}
