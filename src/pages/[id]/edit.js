import { useState } from 'react';
import { useRouter } from 'next/router';

import EditForm from '@/components/Forms/EditForm';
import InputForm from '@/components/Forms/InputForm';

const edit = ({initialValues}) => {
    //console.log('users in editJS', users)
    const router = useRouter();
    //console.log(router)
    const userId = router?.query?.id;
    //
    //console.log('user id in editJS', userId)

    //const handleChange = (e) => {e.preventDefault()}

    //const handleForm = (e) => { e.preventDefault() } 

    return ( 
        <InputForm 
        //onSubmit={handleForm}
        //handleChange={handleChange}
        heading="Add a new User - SEO"
        buttonText = "Update Info"
        data={initialValues}
      />
     );
}

export async function getServerSideProps(params) {
    const { id } = params.params
    console.log('params id in editJS', id)
  
    const res = await fetch(`http://localhost:3000/api/user/${id}`)
                  .then( (result) => result.json())
                  //.then(responseData => userData = [...responseData])
    
    const { userData }  = res  
    //console.log('response in editJS is', res)
    console.log('destrcutured userData in editJS is', userData)
    return {
      props: {initialValues: userData } // will be passed to the page component as props
    }
  }
export default edit;

//