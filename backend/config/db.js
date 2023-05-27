const mongoose = require('mongoose');
const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_pass;

const conn = async() => {
  try{
    const dbConn = await mongoose.connect(`mongodb+srv://${dbUser}:${dbPassword}@cluster0.uomqxht.mongodb.net/`);

    console.log('MongoDB rodando!');
    return dbConn;
  } catch(error){
    console.log(error);
  }
}

conn();

module.exports = conn;
