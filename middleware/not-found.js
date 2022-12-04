const notFoundMiddleware = (req, res) =>
  res.status(404).send("LOL Route does not exist");

export default notFoundMiddleware;
