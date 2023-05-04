const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const schema = new Schema({
    id:{type: ObjectId},
    username: {type: String, unique: true},
    password: {type: String},
    score: {type: Number},
    otp: {type: Number},
    position: {
        x: {type: String},
        y: {type: String},
        z: {type: String}
    }
})


module.exports =
    mongoose.models.game || mongoose.model("game", schema);

