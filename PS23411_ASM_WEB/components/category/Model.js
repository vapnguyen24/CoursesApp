const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const categorySchema = new Schema({
    id: { type: ObjectId},
    name: {
        type: String, // kieu du lieu
        trim: true, // bo khang trang 2 dau
    },

    image: {
        type: String, // kieu du lieu
        required: true, // bat buoc phai co
        trim: true, // bo khang trang 2 dau
    }
})

module.exports = mongoose.models.category || mongoose.model('category', categorySchema);
// category -----> categories