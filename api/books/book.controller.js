const { create, getbooks, getbooksById, updatebook, deletebook } = require('./book.service');

module.exports = {
  create_book: (req, res) => {
    const body = req.body;
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
        message: "The book has been created!",
        data: results
      })
    })
  },

  get_books: (req, res) => {
    getbooks((err, results) => {
      if (err) {
        console.log(err);
        return res.status(500).json({
          success: 0,
          message: "An error occured while fetching books"
        })
      }
      return res.status(200).json({
        success: 1,
        data: results
      })
    })
  },

  get_books_by_id: (req, res) => {
    const id = req.params.id;
    getbooksById(id, (err, results) => {
      if (err) {
        console.log(err);
        return res.status(500).json({
          success: 0,
          message: "An error occured while fetching book's details"
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

  update_book: (req, res) => {
    const body = req.body;
    updatebook(body, (err, results) => {
      if (err) {
        console.log(err);
        return res.status(500).json({
          success: 0,
          message: "An error occured while updating the book"
        })
      }

      if (!results) {
        return res.json({
          success: 0,
          message: "Failed to update the book"
        })
      }

      return res.status(200).json({
        success: 1,
        message: "The book has been successfully updated!"
      })
    })
  },

  delete_book: (req, res) => {
    const data = req.body;
    deletebook(data, (err, results) => {
      if (err) {
        console.log(err);
        return res.status(500).json({
          success: 0,
          message: "An error occured while deleting the book"
        })
      }
      return res.status(200).json({
        success: 1,
        message: "The book has been successfully deleted!"
      })
    })
  },
}