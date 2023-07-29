const { checkToken } = require('../../middleware/auth');
const { create_book, get_books, get_books_by_id, update_book, delete_book } = require('./book.controller');
const router = require('express').Router();

router.post('/', checkToken, create_book)
  .get('/', checkToken, get_books)
  .get('/:id', checkToken, get_books_by_id)
  .patch('/', checkToken, update_book)
  .delete('/', checkToken, delete_book)

module.exports = router;