const mongoose = require("mongoose");

const connectDatabase = () => {
  mongoose.connect(process.env.DB_URI, {
    writeConcern: {
      w: 'majority'
    }
  }).then((con) => {
    console.log("Databse Connected");
  });
};

module.exports = connectDatabase;