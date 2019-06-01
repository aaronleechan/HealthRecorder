const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const weightSchema = new Schema({
    weight: {type: String, require: true},
    createdAt: {type: Date, default: new Date}
});
module.exports = mongoose.model('weight_dependencies',weightSchema);