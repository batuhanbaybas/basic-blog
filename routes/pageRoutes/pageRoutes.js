const express = require('express');
const {
    getHomePage,
    getAboutPage,
    getPostPage,
    getNewPostPage,
    getEditPostPage
} = require('../../controllers/pageControllers/pageControllers');


const router = express.Router();


exports.indexRoute = router.get('/', getHomePage);
exports.aboutRoute = router.get('/about', getAboutPage);
exports.newPostRoute = router.get('/new_post', getNewPostPage);
exports.postRoute = router.get('/post/edit/:id', getEditPostPage);


module.exports = router;