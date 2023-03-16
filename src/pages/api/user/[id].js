import dbconnect from '../../../utils/dbconnect'
import user from '../../../../models/user'


export default async function( req,res ){

  await dbconnect();

  //console.log('testing api users')
    const { method } = req;
    //console.log(method, 'method');
    
    const userData = await user.find({})
    
    res.status(200).json(userData)
    //console.log(users)
    
  }