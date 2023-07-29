const { checkToken } = require('../../middleware/auth');
const { create_User, get_users, get_users_by_id, update_user, delete_user, sign_in } = require('./user.controller');
const router = require('express').Router();

router.post('/', create_User)
  .get('/', checkToken, get_users)
  .get('/:id', checkToken, get_users_by_id)
  .patch('/', checkToken, update_user)
  .delete('/', checkToken, delete_user)
  .post('/signin', sign_in)

module.exports = router;