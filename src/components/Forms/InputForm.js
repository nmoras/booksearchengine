import React from 'react';

const InputForm = ({onSubmit, handleChange, heading, data}) => {
    //console.log(data.firstname)
    //console.log(typeof(intialValuesTest))
    //console.log('heading', heading)
    return ( 
        <div className="mb-4 container">
        <form onSubmit={onSubmit}>
            <h4 text-align="center" className="mb-4">{heading}</h4>
            <div className="mb-3">
              <label className="form-label">First Name</label>
              <input type="text" className="form-control" id="firstname" aria-describedby="emailHelp" value={data?data.firstname:''} onChange={handleChange}></input>
            </div>
            <div className="mb-3">
              <label className="form-label">Last Name</label>
              <input type="text" className="form-control" id="lastname"  value="" onChange={handleChange}></input>
            </div>
            <div className="mb-3">
              <label className="form-label">Profession</label>
              <input type="text" className="form-control" id="profession"  value={data?data.profession:''} onChange={handleChange}></input>
            </div>
          
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
     );
}
 
export default InputForm;