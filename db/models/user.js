const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let user = new Schema ({
    firstname: {
        type: String,
        trim: true,
        required: true
    },
    lastname: {
        type: String,
        trim: true,
        required: true
    },
    profession : {
        type: String,
        trim: true,
        required: true
    }
},
    {
    timestamps: true
 })

module.exports = mongoose.models.user || mongoose.model('user', user);