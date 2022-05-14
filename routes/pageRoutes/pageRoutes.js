const express = require('express');
const { getHomePage, getAboutPage, getPostPage, getNewPostPage } = require('../../controllers/pageControllers/pageControllers');



const router = express.Router();



exports.indexRoute = router.get('/',getHomePage );
exports.aboutRoute = router.get('/about',getAboutPage);
exports.newPostRoute = router.get('/new_post',getNewPostPage);


module.exports = router;