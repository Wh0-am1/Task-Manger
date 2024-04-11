const notFound = (req, res) => res.status(404).send("not found in this URL");

module.exports = notFound;
