/* eslint-disable prefer-destructuring */
/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import styled from 'styled-components';
// import validator from "validator";
import Header from '../components/SignUpHeader';

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
      <Header page = 'Student Sign Up'/>
      <Background>
        
      <h3> Fill in the details to join us as a Student!</h3>
      <form>
        <div>
          <Label htmlFor="fname">First Name</Label>
          <Input type="text" autoComplete="off" 
          value = {studentSignUp.fname}
          onChange = {handleInput}
          name="fname" id="fname" />
        </div>
        <div>
          <Label htmlFor="lname">Last Name</Label>
          <Input type="text" autoComplete="off" 
          value = {studentSignUp.lname}          
          onChange = {handleInput}
          name="lname" id="lname" />
        </div>
        <div>
          <Label htmlFor="email">Email</Label>
          <Input type="email" autoComplete="off" 
          value = {studentSignUp.email}      
          onChange = {handleInput}
          name="email" id="email" />
        </div>
        <div>
          <Label htmlFor="password">Password</Label>
          <Input type="password" autoComplete="off" 
          value = {studentSignUp.password}         
          onChange = {handleInput}
          name="password" id="password" />
        </div>
        <div>
          <Label htmlFor="major">Major</Label>
          <Input type="text" autoComplete="off" 
          value = {studentSignUp.major}     
          onChange = {handleInput}
          name="major" id="major" />
        </div>
        <div>
          <Label htmlFor="graduation">Year of Graduation</Label>
          <Input type="number" autoComplete="off" 
          value = {studentSignUp.graduation}
          onChange = {handleInput}
          name="graduation" id="graduation" placeholder='Enter your year of graduation'/>
        </div>
        <div>
          <Label htmlFor="linkedIn">LinkedIn</Label>
          <Input type="url" autoComplete="off" 
          value = {studentSignUp.linkedIn}         onChange = {handleInput}
          name="linkedIn" id="linkedIn" />
        </div>
        <div>
          <Label htmlFor="addInfo">Additional Information</Label>
          <Input type="text" autoComplete="off" 
          value = {studentSignUp.addInfo}
          onChange = {handleInput}
          name="addInfo" id="addInfo" />
        </div>
        <button type="submit" onClick={handleSubmit}>
          Submit
        </button>
        <button type="submit" onClick={handleCancel}>Cancel </button>
      </form>
    </Background>
    </div>
  );
}

const Background = styled.div`
  min-height: 100vh;
  width: 50vw;
  background: #ffffff;
  margin: auto;
  margin-top: 15vh;
  margin-bottom: 5rem;
  border-radius: 0rem;
  padding: 6rem 3.5rem 6rem 3.5rem;
  color: #000000;
`;

const Input = styled.input`
  font-size: 18px;
  padding: 10px;
  margin: 10px;
  background: white;
  width : 40%;
  height: 25px;
  vertical-align: middle;
  border-style: solid;
  border-radius: 3px;
  // align: right
  ::placeholder {
    color: #786E6E;
  }
`;

const Label = styled.label`
text-align: start;  
font-size: 18px;
  padding: 10px;
  margin: auto;
  color: black;

`;
export default StudentSignUp;
