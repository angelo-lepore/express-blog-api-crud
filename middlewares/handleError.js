// creiamo una middleware che
function handleError(err, req, res, next) {
  res.status(500);
  res.json({
    error: err.message,
  });
}
// // esportiamo la middleware
module.exports = handleError;
