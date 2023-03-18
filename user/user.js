const moongoose = require("mongoose");

const userSchema = new moongoose.Schema({
    fname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true

    },
    option: {
        type: String,
        required: true


    }
})
module.exports = moongoose.model("FromSubmit", userSchema)