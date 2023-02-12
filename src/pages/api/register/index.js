import dbconnect from '../../../utils/dbconnect'
import user from '../../../../models/user'

// //Registration
// post('/api/user/registration', async function( req,res ){
//     const userData = req.body;
//     const registerResult = await orm.registerUser( userData );
//     res.send(registerResult);
//   })

 export default async function( req,res ){
    const { method } = req;
    //console.log(method, 'method');
    //console.log(req.body, 'userdata')
    await dbconnect();
    const userData = req.body;
    // const registerResult = await orm.registerUser( userData );
    // res.send(registerResult);

    const saveData ={
        firstname: userData.firstname,
        lastname: userData.lastname,
        profession: userData.profession
    }
    //const dbUser = new user( saveData )
    const dbUser = await user.create(saveData)
    //const saveUser = await dbUser.save();
    console.log(dbUser)
    
    return{
        message: "User successfully saved", 
    }
  }