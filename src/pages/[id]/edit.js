import { useState } from 'react';
import { useRouter } from 'next/router';

import InputForm from '@/components/Forms/InputForm';

const edit = () => {
    //edit = (users) =>
    const router = useRouter();
    //const userId = router?.query?.id;

    //const handleChange = (e) => { }

    //const handleForm = (e) => { } 

    return ( 
        <InputForm 
        onSubmit={handleForm}
        handleChange={handleChange}
        heading="Add a new User"
        buttonText = "Update Info"
      />
     );
}

export async function getServerSideProps(params) {
    console.log('params', params)

    const { id } = params.params
  
    const res = await fetch('http://localhost:3000/api/user/${id}')
                  .then( (result) => result.json())
               
    console.log(res)
    return {
        
      props: {users: res } // will be passed to the page component as props
    }
  }
  

 
export default edit;