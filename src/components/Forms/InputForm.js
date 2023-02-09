import React from 'react';

const InputForm = ({onSubmit, handleChange, heading}) => {
    return ( 
        <div class="mt-4 container">
        <form onSubmit={onSubmit}>
            <h4 text-align="center">{heading}</h4>
            <div class="mb-3">
              <label class="form-label">Name</label>
              <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={handleChange}></input>
            </div>
            <div class="mb-3">
              <label class="form-label">Your City</label>
              <input type="text" class="form-control" id="exampleInputPassword1" onChange={handleChange}></input>
            </div>
            <div class="mb-3">
              <label class="form-label">Your Education</label>
              <input type="text" class="form-control" id="exampleInputPassword1" onChange={handleChange}></input>
            </div>
          
            <button type="submit" class="btn btn-primary">Submit</button>
        </form>
      </div>
     );
}
 
export default InputForm;