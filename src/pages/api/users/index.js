import dbconnect from '../../../utils/dbconnect'
import user from '../../../../models/user'

// //Registration
// post('/api/user/registration', async function( req,res ){
//     const userData = req.body;
//     const registerResult = await orm.registerUser( userData );
//     res.send(registerResult);
//   })

 export default async function( req,res ){
  console.log('testing api users')
    const { method } = req;
    
    const users = await user.find({})
    console.log(res)
    res.status(200).json({success: true, data: users})
    console.log(users)
    
  }