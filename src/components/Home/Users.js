import { set } from 'mongoose';
import { useState } from 'react';

const Users = ({data}) => {
  console.log('users', data)
   const[ userList, setUserList ] = useState('')
   setUserList[data]
    //console.log('users component is', userList )
    if(data){
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
            { (data.length !== 0) ? data.map( user =>
            <tr>
                    <td scope="col">{user.firstname}</td>
                    <td scope="col">{user.lastname}</td>
                    <td scope="col">{user.profession}</td>
            </tr>
        ): ''}
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