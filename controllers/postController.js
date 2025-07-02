// importiamo l'array posts
const posts = require("../data/posts");

/* rotte CRUD */

/* index (read) */
function index(req, res) {
  // assegno tutti i post alla variabile di risposta
  let filtered_posts = posts;
  // se nella query string è presente il parametro 'tags'
  if (req.query.tags) {
    // filtriamo i post, tenendo solo quelli che includono il tag richiesto
    filtered_posts = posts.filter((post) => post.tags.includes(req.query.tags));
  }
  // invia i post filtrati (o tutti se non è stato specificato alcun tag)
  res.json(filtered_posts);
}

/* show (read) */
function show(req, res) {
  // estrae l'ID dalla URL e lo converte da stringa a numero
  const id = parseInt(req.params.id);
  // cerca il post nell'array che ha un ID uguale a quello passato
  const post = posts.find((post) => post.id === id);
  // se il post non viene trovato, restituisce un errore 404 (Not Found)
  if (!post) {
    return res.status(404).json({
      status: 404,
      message: "Post non trovato!!",
    });
  }
  // se trovato, restituisce il post come oggetto JSON
  res.json(post);
}

/* store */
function store(req, res) {
  // creiamo un nuovo ID incrementando l'ultimo ID presente nell'array posts
  const newId = posts[posts.length - 1].id + 1;
  // creiamo un nuovo oggetto post
  const newPost = {
    id: newId,
    title: req.body.title,
    content: req.body.content,
    image: req.body.image,
    tags: req.body.tags,
  };
  // aggiungiamo il nuovo post all'array posts
  posts.push(newPost);
  // controllo per verificare che il nuovo post sia stato aggiunto correttamente
  console.log(posts);
  // restituiamo lo status corretto e il nuovo post come oggetto JSON
  res.status(201);
  res.json(newPost);
}

/* update */
function update(req, res) {
  // estrae l'ID dalla URL e lo converte da stringa a numero
  const id = parseInt(req.params.id);
  // cerca il post nell'array che ha un ID uguale a quello passato
  const post = posts.find((post) => post.id === id);
  // se il post non viene trovato, restituisce un errore 404 (Not Found)
  if (!post) {
    return res.status(404).json({
      status: 404,
      message: "Post non trovato!!",
    });
  }
  // aggiorna il post con i nuovi dati ricevuti dal body della richiesta
  post.title = req.body.title;
  post.content = req.body.content;
  post.image = req.body.image;
  post.tags = req.body.tags;
  // controllo per verificare che il post sia stato aggiornato correttamente
  console.log(posts);
  // restituisce il post aggiornato
  res.json(post);
}

/* modify */
function modify(req, res) {
  // estrae l'ID dalla URL e lo converte da stringa a numero
  const id = parseInt(req.params.id);
  // cerca il post nell'array che ha un ID uguale a quello passato
  const post = posts.find((post) => post.id === id);
  // se il post non viene trovato, restituisce un errore 404 (Not Found)
  if (!post) {
    return res.status(404).json({
      status: 404,
      message: "Post non trovato!!",
    });
  }
  // aggiorna il post con i nuovi dati ricevuti dal body della richiesta
  post.title = req.body.title;
  post.tags = req.body.tags;
  // controllo per verificare che il post sia stato aggiornato correttamente
  console.log(posts);
  // restituisce il post aggiornato
  res.json(post);
}

/* destroy */
function destroy(req, res) {
  // estrae l'ID dalla URL e lo converte da stringa a numero
  const id = parseInt(req.params.id);
  // cerca il post nell'array che ha un ID uguale a quello passato
  const post = posts.find((post) => post.id === id);
  // se il post non viene trovato, restituisce un errore 404 (Not Found)
  if (!post) {
    return res.status(404).json({
      status: 404,
      message: "Post non trovato!!",
    });
  }
  // rimuovo il post trovato dall'array "posts"
  posts.splice(posts.indexOf(post), 1);
  // risponde con uno status 204 (No Content) per indicare che l'eliminazione è avvenuta con successo
  res.sendStatus(204);
  // log per verificare la nuova array senza il post cancellato
  console.log(posts);
}

// esportiamo tutto
module.exports = { index, show, store, update, modify, destroy };
