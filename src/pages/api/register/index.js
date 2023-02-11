import dbConnect from '../../../utils/dbconnect'
const db = require( '../../../../db/models' )

// //Registration
// post('/api/user/registration', async function( req,res ){
//     const userData = req.body;
//     const registerResult = await orm.registerUser( userData );
//     res.send(registerResult);
//   })

 export default async function( req,res ){
    const { method } = req;
    console.log(method, 'method');
    console.log(req.body, 'userdata')

    // await dbConnect();


    // const userData = req.body;
    // const registerResult = await orm.registerUser( userData );
    // res.send(registerResult);

    // const saveData ={
    //     firstname: userData.firstname,
    //     lastname: userData.lastname,
    //     profession: usersData.profession
    // }
    // const dbUser = new db.user( saveData )
    // const saveUser = await dbUser.save();
    
    // return{
    //     message: "User successfully saved", 
    // }
  }