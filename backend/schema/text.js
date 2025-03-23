const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const textSchema = new Schema({
  text: { type: String, require },
});

//"Text" is the name of the collection
const Text = mongoose.model("Text", textSchema);
module.exports = Text;
