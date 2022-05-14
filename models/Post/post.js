const mongoose = require("mongoose")


const postSchema = mongoose.Schema({
    title: {
        type: String,
        required: true

    },
    subtitle: {
        type: String,
        required: true

    },
    content: {
        type: String,
        required: true

    },
    createDate: {
        type: Date,
        default: Date.now
    },
})

const Post = mongoose.model("Post", postSchema)

module.exports = Post