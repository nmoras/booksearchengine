import dbconnect from '../../../utils/dbconnect'
import user from '../../../../models/user'

// //Registration
// post('/api/user/registration', async function( req,res ){
//     const userData = req.body;
//     const registerResult = await orm.registerUser( userData );
//     res.send(registerResult);
//   })

 export default async function( req,res ){

  await dbconnect();

  //console.log('testing api users')
    const { method } = req;
    //console.log(method, 'method');
    
    const userData = await user.find({})
    
    res.status(200).json(userData)
    //console.log(users)
    
  }