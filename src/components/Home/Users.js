const Users = (users) => {
    console.log(users)
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
          <tr>{users.map( (user) =>
                <div>
                    <td>{user.firstname}</td>
                    <td>{user.lastname}</td>
                    <td>{user.profession}</td>
                </div>      
        )} 
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