const index = (req, res) => {
  res.render('index', {title:"Hello"});
};

module.exports = {
  index
};
