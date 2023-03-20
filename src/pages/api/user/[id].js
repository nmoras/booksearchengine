import dbconnect from '../../../utils/dbconnect'
import user from '../../../../models/user'


export default async function( req,res ){
  await dbconnect();
  //console.log('edit id', req)
    const { method,
              query: { id }} = req;
    //console.log(id, 'id in id api');
    
    switch(method){
      case 'GET':
      try {
        const userData = await user.findById(id)
        //console.log('userData in id api is', userData)
        if(!userData) {
          res.status(400).json({
            success: false,
            message: "something went wrong"
          })
        }
        res.status(200).json({
          success: true,
          userData: userData
        });  
      } catch (error) {
        res.status(400).json({ success: false, message:error.message})
      }
      break;
      case 'PUT':
        try {
          const userData = await user.findByIdAndUpdate (id, rq.body, (err) => {
            if (err){
              console.log(err)
            }
          });
          if(!userData) {
            res.status(400).json({
              success: false,
              message: "something went wrong"
            })
          }
          res.status(200).json({
            success: true
          });  
        } catch (error) {
          res.status(400).json({ success: false, message:error.message})
        }
        break;
    }
  }