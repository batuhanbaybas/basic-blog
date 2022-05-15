const mongoose = require("mongoose")


const postSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 50

    },
    subtitle: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 50

    },
    content: {
        type: String,
        required: true,
        minlength: 50,
        maxlength: 1000

    },
    createDate: {
        type: Date,
        default: Date.now
    },
})

const Post = mongoose.model("Post", postSchema)

module.exports = Post