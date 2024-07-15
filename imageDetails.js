const mongoose = require("mongoose");

const ImageDetailsSchema = new mongoose.Schema(
    {
        username: {type:String, required:true},
        image:{type: String, required:true},
        vote: {type: Number, default:0},
        uploadDateTime: {type: Date,default:Date.now}
    },
    {timestamps: true},
    {
        collection: "Details",
    }
);

mongoose.model("Details", ImageDetailsSchema);