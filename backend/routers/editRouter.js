const express = require("express");
const router = express.Router();
const { join } = require("path");
const sendMessage = require(join(__dirname, "..", "help", "help.js"));
const Text = require(join(__dirname, "..", "schema", "text.js"));

router.post("/", (req, res) => {
  try {
    //check if req.body is empty
    if (!req.body) {
      return sendMessage(res, false, "text is required in req.body");
    }
    //check datas in req.body
    const { text, id } = req.body;
    if ((!text, !id)) {
      return sendMessage(res, false, "failed to transmit data");
    }

    //check if id is valid
    if (id.length !== 24) {
      return sendMessage(res, false, "id is not valid");
    }

    //find and update
    Text.findByIdAndUpdate(id, { text }, { new: true })
      .then((e) => {
        return sendMessage(res, true, e);
      })
      .catch((e) => {
        console.log(e);
        return sendMessage(res, false, "error occured");
      });
  } catch (error) {// global errror handling
    console.log(error);
    return sendMessage(res, false, "error occured");
  }
});

module.exports = router;
