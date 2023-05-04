const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const schema = new Schema({
    id: { type: ObjectId },
    name: {
        type: String, // kieu du lieu
        trim: true, // bo khang trang 2 dau
    },
    image: { type: String, required: true, trim: true, },
    price: { type: String, require: true, trim: true, },
    describe: { type: String, require: true, trim: true, },
    source: { type: String, require: true, trim: true,  },
    category: { type: ObjectId, ref: "category"},
});

module.exports =
    mongoose.models.product || mongoose.model("product", schema);

