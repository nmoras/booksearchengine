const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let userSchema = new Schema ({
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

 export default mongoose.models.user ||
 mongoose.model("user", userSchema);