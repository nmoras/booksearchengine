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
    
    const users = await user.find({})
    res.status(200).json({success: true, data: users})
    
  }