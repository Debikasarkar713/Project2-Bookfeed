const router = require('express').Router();



const { bookSearch } = require('../service/book');

router.get('/', bookSearch, (req, res) => {
  // res.json(res.book)
  res.render('homepage', {
    books: res.book,
  });
});

router.get('/', (req, res) => {
  res.render('/users/login');
});

// This route serves your `/signup` form
router.get('/signup', (req, res) => {
  res.render('signup');
});

module.exports = router;
