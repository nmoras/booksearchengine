const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI,{useNewUrlParser: true});
const connection = mongoose.connection;
connection.once('open', () => {
      console.log("MongoDB database connection established successfully");
    })

const db = require( './models' );

async function registerUser( userData ){
    if( !userData.firstname || !userData.lastname || !userData.profession){
        return{ message: 'Invalid user data', id: "", name: "" }
    }
       
    const saveData ={
        firstname: userData.firstname,
        lastname: userData.lastname,
        profession: usersData.profession
    }
    const dbUser = new db.user( saveData )
    const saveUser = await dbUser.save();
    
    return{
        message: "User successfully saved", 
    }
};

module.exports = { 
    registerUser
}