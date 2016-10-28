const router = require('express').Router();

const { bookSearch } = require('../service/book');

router.get('/book', bookSearch, (req, res) => {
  res.json(res.book)
  // res.render('index', {
  //   book: res.book,
  // });
  console.log(res.book);
});
module.exports = router;
