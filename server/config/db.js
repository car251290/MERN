const mongoose = require('mongoose');
// the connectDB function to connect to the database
const connectDB = async () => {
  // the connection to the database using the MONGO_URI from the .env file
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true, 
      useUnifiedTopology: true, 
    });
    // log the connection host
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};
// export the connectDB function to be used in the server.js file
module.exports = connectDB;