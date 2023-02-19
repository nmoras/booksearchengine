import user from 'models/user';
import { set } from 'mongoose';
import { useState } from 'react';

const Users = (users) => {
  console.log('users', users)
   const[ userList, setUserList ] = useState([])
   setUserList[users.data]
    console.log('users component is', userList )
    if(users){
      return ( 
        <div>
        <table className="table">
        <thead>
          <tr>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">Profession</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            { (userList.length !== 0) ? userList.map( user =>
                <div>
                    <td>{user.firstname}</td>
                    <td>{user.lastname}</td>
                    <td>{user.profession}</td>
                </div>   
        ): ''}
        </tr>
        </tbody>  
        </table>
      </div>
     )
    } else
    {
      return(
        <div>home page</div>
       )
    }
    
}
 
export default Users;