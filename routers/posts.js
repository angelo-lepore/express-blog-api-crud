// importiamo express
const express = require("express");
const router = express.Router();
const port = 3010;

// importiamo l'array posts
const posts = require("../data/posts");

/* definiamo tutte le rotte */

/* index (read) */
// res.send("Lista delle pizze");
router.get("/", (req, res) => {
  res.json(posts);
});

/* show (read) */
// res.send("Dettagli della pizza " + req.params.id);
router.get("/:id", (req, res) => {
  // const post = posts.find((post) => {
  // return post.id == req.params.id;
  // });
  // res.json(post);
  const id = parseInt(req.params.id);
  const post = posts.find((post) => {
    return post.id === id;
  });
  res.json(post);
});

/* store */
// res.send("Creazione nuova pizza");
router.post("/", (req, res) => {
  res.send("Creazione nuovo post");
});

/* update */
// res.send("Modifica integrale della pizza " + req.params.id);
router.put("/:id", (req, res) => {
  const id = req.params.id;
  res.send(`Modifica integrale del post: ${id}`);
});

/* modify */
// res.send("Modifica parziale della pizza " + req.params.id);
router.patch("/:id", (req, res) => {
  const id = req.params.id;
  res.send(`Modifica parziale del post: ${id}`);
});

/* destroy */
// res.send("Eliminazione della pizza " + req.params.id);
router.delete("/:id", (req, res) => {
  const id = req.params.id;
  res.send(`Cancellazione del post: ${id}`);
});

// esportiamo router
module.exports = router;
