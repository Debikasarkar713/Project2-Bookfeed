const router = require('express').Router();

const { bookSearch } = require('../service/book');

router.get('/', bookSearch, (req, res) => {
  // res.json(res.book)
  res.render('index', {
    books: res.book,
  });
});

module.exports = router;
