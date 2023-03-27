/* eslint-disable prefer-destructuring */
/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
// import validator from "validator";


function CounsellorSignUp() {

  const [counsellorSignUp, setCounsellorSignUp] = useState({
    fname :'',
    lname: '',
    email :'',
    password:'',
    major: '',
    graduation :'', 
    linkedIn: '',
    current: '',
    addInfo: ''

  });
  const [profiles,setProfiles] = useState([]);
  
  // const validateEmail = (e) => {
  //   const email = e.target.value;

  //   if (validator.isEmail(email)) {
  //     // setMessage("Thank you");
  //     // do nothing
  //   } else {
  //     setMessage('Please, enter valid Email!');
  //   }
  // };


  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setCounsellorSignUp({...counsellorSignUp, [name]: value})
  }


  const handleCancel = () => {
    // clear all input fields.
    setCounsellorSignUp({fname :'',lname: '',email :'',password:'',major: '',graduation :'',  linkedIn: '',current:'', addInfo: ''})

  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const newCounsellor = {...counsellorSignUp, id:new Date().getTime().toString()}
    console.log(newCounsellor);
    setProfiles([...profiles, newCounsellor]); 
    setCounsellorSignUp({fname :'',lname: '',email :'',password:'',major: '',graduation :'',  linkedIn: '',current :'', addInfo: ''})
  };

  return (
    <div>
      <h3> Fill in the details to join us as a Counsellor!</h3>
      <form>
        <div>
          <label htmlFor="fname">First Name</label>
          <input type="text" autoComplete="off" 
          value = {counsellorSignUp.fname}
          onChange = {handleInput}
          name="fname" id="fname" />
        </div>
        <div>
          <label htmlFor="lname">Last Name</label>
          <input type="text" autoComplete="off" 
          value = {counsellorSignUp.lname}          
          onChange = {handleInput}
          name="lname" id="lname" />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" autoComplete="off" 
          value = {counsellorSignUp.email}      
          onChange = {handleInput}
          name="email" id="email" />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="password" autoComplete="off" 
          value = {counsellorSignUp.password}         
          onChange = {handleInput}
          name="password" id="password" />
        </div>
        <div>
          <label htmlFor="major">Major</label>
          <input type="text" autoComplete="off" 
          value = {counsellorSignUp.major}     
          onChange = {handleInput}
          name="major" id="major" />
        </div>
        <div>
          <label htmlFor="graduation">Year of Graduation</label>
          <input type="number" autoComplete="off" 
          value = {counsellorSignUp.graduation}
          onChange = {handleInput}
          name="graduation" id="graduation"/>
        </div>
        <div>
          <label htmlFor="linkedIn">LinkedIn</label>
          <input type="url" autoComplete="off" 
          value = {counsellorSignUp.linkedIn}         onChange = {handleInput}
          name="linkedIn" id="linkedIn" />
        </div>
        <div>
          <label htmlFor="current">Current Company/University</label>
          <input type="text" autoComplete="off" 
          value = {counsellorSignUp.current}         onChange = {handleInput}
          name="current" id="current" />
        </div>
        <div>
          <label htmlFor="addInfo">Additional Information</label>
          <input type="text" autoComplete="off" 
          value = {counsellorSignUp.addInfo}
          onChange = {handleInput}
          name="addInfo" id="addInfo" />
        </div>
        <button type="submit" onClick={handleSubmit}>
          Submit
        </button>
        <button type="submit" onClick={handleCancel}>Cancel </button>
      </form>
    </div>
  );
}

export default CounsellorSignUp;
