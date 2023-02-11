const orm = require( '../../../../db/orm.mongoose' );

// //Registration
// post('/api/user/registration', async function( req,res ){
//     const userData = req.body;
//     const registerResult = await orm.registerUser( userData );
//     res.send(registerResult);
//   })

 export default async function( req,res ){
    const userData = req.body;
    const registerResult = await orm.registerUser( userData );
    res.send(registerResult);
  }