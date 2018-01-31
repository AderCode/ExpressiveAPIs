const express = require("express");
const cors = require("cors");
const router = express.Router();
const store = require("../chirpsstore");

router.get("/:id?", (req, res) => {
  let id = req.params.id;
  if (id) {
    res.json(store.GetChirp(id));
  } else {
    res.send(store.GetChirps());
  }
});

router.post("/", (req, res) => {
  store.CreateChirp(req.body);
  res.sendStatus(200);
});

router.put("/edit/id?", (req, res) => {
  //PUT stuff here lol xD :3 <(^_^<)
  let id = req.params.id;
  if (id) {
  store.UpdateChirp(id, req.body);
  res.sendStatus(200);
} else {
    res.sendStatus(404);
  }
});

router.delete("/delete/:id?", (req, res) => {
  //DELETE stuff here Dx- - - - <(*_*<)
  let id = req.params.id;
  if (id) {
    store.DeleteChirp(id);
    res.sendStatus(200);
  } else {
    res.sendStatus(404);
  }
});

module.exports = router;
