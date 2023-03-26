import dbconnect from '../../../utils/dbconnect'
import user from '../../../../models/user'


export default async function( req,res ){
  await dbconnect();
    const { method,
              query: { id }} = req;
              //console.log('edit id', id)
    //console.log('req.body in userid page', req.body);
    
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
      case 'POST':
        try {
          const userData = await user.findByIdAndUpdate(id, req.body, (err) => {
            if (err){
              console.log(err)
            }
          });
          console.log('userdata', userdata)
          if(!userData) {
            res.status(400).json({ success: false })
          }
          res.status(200).json({ success: true });  
        } catch (error) {
          res.status(400).json({ success: false, message:error.message})
        }
        break;
    }
  }