const pool = require('../../config/database');

module.exports = {
  create: (data, callback) =>{
    pool.query(
      `insert into tusers (firstname, lastname, gender, email, password, telephone)
      values (?,?,?,?,?,?)`,
      [
        data.firstname,
        data.lastname,
        data.gender,
        data.email,
        data.password,
        data.telephone
      ],
      (error, results, fields)=>{
        if(error){
          return callback(error)
        }
        return callback(null, results)
      }
    )
  },
  getUsers: (callback) => {
    pool.query(
      `select * from tusers`,
      [],
      (error, results, fields) => {
        if(error){
          return callback(error);
        }
        return callback(null, results)
      }
    )
  },
  getUsersById: (id, callback) =>{
    pool.query(
      `select * from tusers where id = ?`,
      [id],
      (error, results, fields) =>{
        if(error){
          return callback(error);
        }
        return callback(null, results[0])
      }
    )
  },
  updateUser: (data, callback) =>{
    pool.query(
      `update tusers set firstname = ?, lastname = ?, gender = ?, email = ?, password = ?, telephone = ? where id = ?`,
      [
        data.firstname,
        data.lastname,
        data.gender,
        data.email,
        data.password,
        data.telephone,
        data.id 
      ],
      (error, results, fields)=>{
        if (error){
          return callback(error);
        }

        return callback(results)
      }
    )
  },
  deleteUser : (data, callback) => {
    pool.query(
      `delete from tusers where id = ?`,
      [data.id],
      (error, results, fields)=>{
        if(error){
          return callback(error);
        }
        return callback(null, results[0])
      }
    )
  },

  signIn: (email, callback) =>{
    pool.query(
      `select * from tusers where email = ?`,
      [email],
      (error, results, fields) =>{
        if(error){
          return callback(error);
        }
        return callback(null, results[0])
      }
    )
  },
  
}