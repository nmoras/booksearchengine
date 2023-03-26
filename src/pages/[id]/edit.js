import { useState } from 'react';
import { useRouter } from 'next/router';

import EditForm from '@/components/Forms/EditForm';
import InputForm from '@/components/Forms/InputForm';

const edit = ({initialValues}) => {
    //console.log('users in editJS', initialValues)
    const router = useRouter();
    //console.log(router)
    const userId = router?.query?.id;
    
    const [form, setForm] = useState( { 
      firstname: initialValues?initialValues.firstname:'',
      lastname: initialValues?initialValues.lastname:'', 
      profession: initialValues?initialValues.profession:'' })
    //console.log('user id in editJS', userId)

    const handleChange = (e) => {
      console.log(e.target.value)
      e.preventDefault();
      let user = ({...form, [e.target.id] :e.target.value})
      console.log(user)
      setForm(user)
    }

    const handleForm = async (e) => {
        e.preventDefault() 
        const apiUserForm = await fetch(`http://localhost:3000/api/user/${userId}`, 
        {   method: 'post',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(form)
        })
        .then( (result) => result.json())
        .then( setForm({ firstname: "", lastname: "", profession: "" })) 
        
        console.log('apiuseform is', apiUserForm)
        if(apiUserForm.success){
          router.push('/')
        }
      
      } 

    return ( 
        <InputForm 
        onSubmit={handleForm}
        handleChange={handleChange}
        heading="Add a new User - SEO"
        buttonText = "Update Info"
        data={form}
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
    //console.log('destrcutured userData in editJS is', userData)
    return {
      props: {initialValues: userData } // will be passed to the page component as props
    }
  }
export default edit;

//