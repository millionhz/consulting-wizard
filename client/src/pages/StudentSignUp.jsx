/* eslint-disable prefer-destructuring */
/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
// import validator from "validator";


function StudentSignUp() {

  const [studentSignUp, setStudentSignUp] = useState({
    fname :'',
    lname: '',
    email :'',
    password:'',
    major: '',
    graduation :'', 
    linkedIn: '',
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
    setStudentSignUp({...studentSignUp, [name]: value})
  }


  const handleCancel = () => {
    // clear all input fields.
    setStudentSignUp({fname :'',lname: '',email :'',password:'',major: '',graduation :'',  linkedIn: '',addInfo: ''})

  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const newCounsellor = {...studentSignUp, id:new Date().getTime().toString()}
    console.log(newCounsellor);
    setProfiles([...profiles, newCounsellor]); 
    setStudentSignUp({fname :'',lname: '',email :'',password:'',major: '',graduation :'',  linkedIn: '',addInfo: ''})
  };

  return (
    <div>
      <h3> Fill in the details to join us as a Student!</h3>
      <form>
        <div>
          <label htmlFor="fname">First Name</label>
          <input type="text" autoComplete="off" 
          value = {studentSignUp.fname}
          onChange = {handleInput}
          name="fname" id="fname" />
        </div>
        <div>
          <label htmlFor="lname">Last Name</label>
          <input type="text" autoComplete="off" 
          value = {studentSignUp.lname}          
          onChange = {handleInput}
          name="lname" id="lname" />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" autoComplete="off" 
          value = {studentSignUp.email}      
          onChange = {handleInput}
          name="email" id="email" />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="password" autoComplete="off" 
          value = {studentSignUp.password}         
          onChange = {handleInput}
          name="password" id="password" />
        </div>
        <div>
          <label htmlFor="major">Major</label>
          <input type="text" autoComplete="off" 
          value = {studentSignUp.major}     
          onChange = {handleInput}
          name="major" id="major" />
        </div>
        <div>
          <label htmlFor="graduation">Year of Graduation</label>
          <input type="number" autoComplete="off" 
          value = {studentSignUp.graduation}
          onChange = {handleInput}
          name="graduation" id="graduation"/>
        </div>
        <div>
          <label htmlFor="linkedIn">LinkedIn</label>
          <input type="url" autoComplete="off" 
          value = {studentSignUp.linkedIn}         onChange = {handleInput}
          name="linkedIn" id="linkedIn" />
        </div>
        <div>
          <label htmlFor="addInfo">Additional Information</label>
          <input type="text" autoComplete="off" 
          value = {studentSignUp.addInfo}
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

export default StudentSignUp;
