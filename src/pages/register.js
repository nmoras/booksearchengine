import Head from 'next/head'
import { useState } from 'react';
import { useRouter } from 'next/router';

import InputForm from '@/components/Forms/InputForm'

const Register = () => {
    const router = useRouter();
    const [form, setForm] = useState( { firstname: "", lastname: "", profession: "" })

    const handleChange = (e) => {
        e.preventDefault();
        let user = ({...form, [e.target.id] :e.target.value})
        //console.log(user)
        setForm(user)
        // let newThread =  ({ ...myThread, [id] : value})
        // setMyThread(newThread)
    }
      
    const handleForm = async (e) => {
      
      e.preventDefault();

      const apiUserForm = await fetch('/api/register', 
      {   method: 'post',
          headers: {
              'Accept': 'application/json, text/plain, */*',
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(form)
      })
      .then( (result) => result.json())
      .then( setForm({ firstname: "", lastname: "", profession: "" })) 

      if(apiUserForm.success){
        router.push('/')
      }
    }

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <main className={styles.main}>
        <div className={styles.description}>
        </div>
      </main> */}
      <InputForm 
        onSubmit={handleForm}
        handleChange={handleChange}
        heading="Add a new User"
      />
      
    </>
  )
}

export default Register;