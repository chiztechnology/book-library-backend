const pool = require('../../config/database');

module.exports = {
  create: (data, callback) =>{
    pool.query(
      `insert into tbooks (title, overview, publish_date, author, image, rating, category)
      values (?,?,?,?,?,?,?)`,
      [
        data.title,
        data.overview,
        data.publish_date,
        data.author,
        data.image,
        data.rating,
        data.category
      ],
      (error, results, fields)=>{
        if(error){
          return callback(error)
        }
        return callback(null, results)
      }
    )
  },
  getbooks: (callback) => {
    pool.query(
      `select * from tbooks`,
      [],
      (error, results, fields) => {
        if(error){
          return callback(error);
        }
        return callback(null, results)
      }
    )
  },
  getbooksById: (id, callback) =>{
    pool.query(
      `select * from tbooks where id = ?`,
      [id],
      (error, results, fields) =>{
        if(error){
          return callback(error);
        }
        return callback(null, results[0])
      }
    )
  },
  updatebook: (data, callback) =>{
    pool.query(
      `update tbooks set title = ?, overview = ?, publish_date = ?, author = ?, image = ?, rating = ?, category = ?  where id = ?`,
      [
        data.title,
        data.overview,
        data.publish_date,
        data.author,
        data.image,
        data.rating,
        data.category,
        data.id 
      ],
      (error, results, fields)=>{
        if (error){
          return callback(error);
        }

        return callback(null, results)
      }
    )
  },
  deletebook : (data, callback) => {
    pool.query(
      `delete from tbooks where id = ?`,
      [data.id],
      (error, results, fields)=>{
        if(error){
          return callback(error);
        }
        return callback(null, results[0])
      }
    )
  }
}