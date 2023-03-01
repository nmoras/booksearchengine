import React from 'react';

import InputForm from '@/components/Forms/InputForm';

const edit = () => {
    return ( 
        <InputForm 
        onSubmit={handleForm}
        handleChange={handleChange}
        heading="Add a new User"
        buttonText = "Update Info"
      />
     );
}
 
export default edit;