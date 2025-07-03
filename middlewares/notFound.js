// creiamo una middleware che risponda con un messaggio di errore (404)
function notFound(req, res, next) {
  res.status(404);
  res.json({
    error: "Not Found",
    message: "Pagina non trovata!!",
  });
}

// // esportiamo la middleware
module.exports = notFound;
