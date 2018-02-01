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
    console.log('req.body = ', req.body)
  // console.log("req.body = ", req.body);
  //   console.log('req.body.text = ', req.body.text)
  res.status(200)
  res.redirect("/");
});

router.put("/:id?", (req, res) => {
  //PUT stuff here lol xD :3 <(^_^<)
  let id = req.params.id;
  store.UpdateChirp(id, req.body);
  res.status(200)
  res.redirect("/");
});

router.delete("/:id?", (req, res) => {
  //DELETE stuff here Dx- - - - <(*_*<)
  let id = req.params.id;
  store.DeleteChirp(id);
  res.status(200);
  res.redirect("/")
});

module.exports = router;
