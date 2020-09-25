var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var LinkSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  destinations: {
    type: Array,
    required: true,
  },
});

module.exports = mongoose.model("Link", LinkSchema);
