const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const uricAcidSchema = new Schema({
    uricAcidLevel: {type: String, require: true},
    createdAt: {type: Date, default: new Date}
});
module.exports = mongoose.model('uricAcid_dependencies',uricAcidSchema);
