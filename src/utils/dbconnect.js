const mongoose = require('mongoose');

async function dbConnect(){

    mongoose.connect(process.env.MONGODB_URI,{useNewUrlParser: true});
    const connection = mongoose.connection;
    connection.once('open', () => {
      console.log("MongoDB database connection established successfully");
    })

}

