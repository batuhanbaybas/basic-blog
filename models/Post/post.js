const mongoose = require("mongoose")


const postSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    timesnap: {
        type: Date,
        default: Date.now()
    },
})

module.exports = mongoose.model("Post", postSchema)