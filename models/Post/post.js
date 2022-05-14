const mongoose = require("mongoose")


const postSchema = mongoose.Schema({
    title: {
        type: String,


    },
    subtitle: {
        type: String,

    },
    content: {
        type: String,

    },
    createDate: {
        type: Date,
        default: Date.now
    },
})

const Post = mongoose.model("Post", postSchema)

module.exports = Post