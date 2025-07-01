// importiamo express
const express = require("express");
const router = express.Router();
const port = 3010;

// importiamo l'array posts
const posts = require("../data/posts");

// importiamo le funzioni del controller
const postsControllers = require("../controllers/postsControllers");

/* rotte CRUD */

/* index (read) */
// router per ottenere tutti i post, con possibilità di filtro tramite query string
router.get("/", postsControllers.index);

/* show (read) */
// route per ottenere un post specifico tramite ID
router.get("/:id", postsControllers.show);

/* store */
// route per creare un nuovo post
router.post("/", postsControllers.store);

/* update */
// route per modificare un post esistente in modo integrale
router.put("/:id", postsControllers.update);

/* modify */
// route per modificare un post esistente in modo parziale
router.patch("/:id", postsControllers.modify);

/* destroy */
// route per cancellare un post esistente
router.delete("/:id", postsControllers.destroy);

// esportiamo router
module.exports = router;
