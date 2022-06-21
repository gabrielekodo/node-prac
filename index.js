var mongoose = require("mongoose");
const uri = "mongodb://localhost:27017/tutorialkart";
mongoose.connect(
  "mongodb+srv://gabriel:uwTJ5YfdJtTss5ku@cluster0.suo4n.mongodb.net/EKOGABDB?retryWrites=true&w=majority"
);

var db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));

db.once("open", function () {
  console.log("Connection Successful!");
});
