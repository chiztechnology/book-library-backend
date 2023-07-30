const { create, getUsers, getUsersById, updateUser, deleteUser, signIn } = require('./user.service');
const { genSaltSync, hashSync, compareSync } = require('bcrypt');
const { sign } = require('jsonwebtoken')

module.exports = {
  create_User: (req, res) => {
    const body = req.body;
    const salt = genSaltSync(10);
    body.password = hashSync(body.password, salt);
    create(body, (err, results) => {
      if (err) {
        console.log(err);
        return res.status(500).json({
          success: 0,
          message: "Database Connection error"
        })
      }
      return res.status(200).json({
        success: 1,
        message: "The user account has been created!",
        data: results
      })
    })
  },

  get_users: (req, res) => {
    getUsers((err, results) => {
      if (err) {
        console.log(err);
        return res.status(500).json({
          success: 0,
          message: "An error occured while fetching users"
        })
      }
      return res.status(200).json({
        success: 1,
        data: results
      })
    })
  },

  get_users_by_id: (req, res) => {
    const id = req.params.id;
    getUsersById(id, (err, results) => {
      if (err) {
        console.log(err);
        return res.status(500).json({
          success: 0,
          message: "An error occured while fetching user's details"
        })
      }

      if (!results) {
        return res.json({
          success: 0,
          message: "Record not found"
        })
      }

      return res.status(200).json({
        success: 1,
        data: results
      })
    })
  },
  update_user: (req, res) => {
    const body = req.body;
    const salt = genSaltSync(10);
    body.password = hashSync(body.password, salt);

    updateUser(body, (err, results) => {
      if (err) {
        console.log(err);
        return res.status(500).json({
          success: 0,
          message: "An error occured while updating the user"
        })
      }

      if (!results) {
        return res.json({
          success: 0,
          message: "Failed to update the user"
        })
      }

      return res.status(200).json({
        success: 1,
        message: "The user has been successfully updated!"
      })
    })
  },

  delete_user: (req, res) => {
    const data = req.body;
    deleteUser(data, (err, results) => {
      if (err) {
        console.log(err);
        return res.status(500).json({
          success: 0,
          message: "An error occured while deleting the user"
        })
      }
      return res.status(200).json({
        success: 1,
        message: "The user has been successfully deleted!"
      })
    })
  },

  sign_in: (req, res) => {
    const body = req.body;
    signIn(body.email, (err, results) => {
      if (err) {
        console.log(err);
        return res.status(500).json({
          success: 0,
          message: "An error occured while signing in"
        })
      }
      if (!results) {
        return res.json({
          success: 0,
          message: "Invalid email or password"
        })
      }
      const result = compareSync(body.password, results.password);
      if (result) {
        results.password = undefined;
        const token = sign({ result: results }, "qwe1234", {
          expiresIn: "30d"
        })
        return res.json({
          success: 1,
          message: "Login successfull",
          token: token
        })
      } else {
        return res.json({
          success: 0,
          message: "Invalid email or pasword"
        })
      }
    })
  }
}