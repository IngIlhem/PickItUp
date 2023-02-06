const mongoose = require("mongoose");
const mongoUri = "mongodb://127.0.0.1/itemDataBase";

mongoose
.connect(mongoUri, { useUnifiedTopology: true, useNewUrlParser: true })
.then( () => {
  console.log("db connected");
})
.catch((err)=>{
  console.log(err);
});
mongoose.set('strictQuery', true);
const db = mongoose.connection;

module.exports = db
