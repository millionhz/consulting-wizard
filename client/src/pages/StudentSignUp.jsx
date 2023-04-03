/* eslint-disable prefer-destructuring */
/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import styled from 'styled-components';
// import validator from "validator";
import { Background, Input, Label, Div, Button} from '../components/StyledComponents.styles';
import Header from '../components/SignUpHeader';

function StudentSignUp() {

  const [studentSignUp, setStudentSignUp] = useState({
    fname :'',
    lname: '',
    email :'',
    password:'',
    confirmPassword : '',
    major: '',
    graduation :'', 
    linkedIn: '',
    addInfo: ''

  });
  const [profiles,setProfiles] = useState([]);
  // const [password, setPassword] = useState('');
  // const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordsMatch, setPasswordsMatch] = useState(true);

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setStudentSignUp({...studentSignUp, [name]: value})
  };

  const handleCancel = () => {
    // clear all input fields.
    setStudentSignUp({fname :'',lname: '',email :'',password:'', confirmPassword: '', major: '',graduation :'',  linkedIn: '',addInfo: ''})

  };

  // const validatePassword = () => {
  //   const pass = document.getElementById('password').value;
  //   const cPass = document.getElementById('confirmPassword').value;
  //   const msg = document.getElementById('message')
  //   if (pass.length !== 0)
  //   {
  //     if (pass === cPass)
  //     {
  //       msg.textContent= 'Passwords Match';
  //       msg.style.backgroundColor = '"#3ae374';
  //       // console.log('Psswords do not match ')
  //     }
  //     else{
  //       msg.textContent = 'Passwords do not match';
  //     msg.style.backgroundColor = '"#ff4d4d'

  //     }
  //   }
  //   else 
  //   {
  //     alert('Password can not be empty');
  //     msg.textContent = '';

  //   }
  // }


  // const handlePasswordChange = (event) => {
  //   setPassword(event.target.value);
  // };

  // const handleConfirmPasswordChange = (event) => {
  //   setConfirmPassword(event.target.value);
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    const pass = document.getElementById('password').value;
    const cPass = document.getElementById('confirmPassword').value;
    if (pass !== cPass) {
      setPasswordsMatch(false);
      alert('Passwords do not match');
    } 
    const newCounsellor = {...studentSignUp, id:new Date().getTime().toString()}
    console.log(newCounsellor);
    setProfiles([...profiles, newCounsellor]); 
    setStudentSignUp({fname :'',lname: '',email :'',password:'',confirmPassword: '', major: '',graduation :'',  linkedIn: '',addInfo: ''})
  };

  return (
    <div>
      <Header page = 'Student Sign Up'/>
      <Background>
        
      <h3> Fill in the details to join us as a Student!</h3>
      <form>
        <Div align ="left" >
          <Label htmlFor="fname">First Name</Label>
          <Input type="text" autoComplete="off" 
          value = {studentSignUp.fname}
          onChange = {handleInput}
          name="fname" id="fname" placeholder='First Name' />
        </Div>
        <Div  >
          <Label htmlFor="lname">Last Name</Label>
          <Input type="text" autoComplete="off" 
          value = {studentSignUp.lname}          
          onChange = {handleInput}
          name="lname" id="lname" placeholder='Last Name' />
        </Div>
        <Div >
          <Label htmlFor="email">Email</Label>
          <Input type="email" autoComplete="off" 
          value = {studentSignUp.email}      
          onChange = {handleInput}
          name="email" id="email" placeholder='Email Address' />
        </Div>
        <Div  >
          <Label htmlFor="password">Password</Label>
          <Input type="password" autoComplete="off" 
          value = {studentSignUp.password}         
          onChange = {handleInput}
          name="password" id="password" placeholder='Password' />
        </Div>

        <Div >
          <Label htmlFor="confirmPassword">Confirm Password</Label>
          <Input type="password" autoComplete="off" 
          value = {studentSignUp.confirmPassword}         
          onChange = {handleInput}
          name="confirmPassword" id="confirmPassword" placeholder='Confirm Password' />
        </Div>
        {/* style={{ color: 'black'}} */}
        {/* {!passwordsMatch && <p>Passwords do not match.</p>} */}
        <Div > 
          <Label htmlFor="major">Major</Label>
          <Input type="text" autoComplete="off" 
          value = {studentSignUp.major}     
          onChange = {handleInput}
          name="major" id="major" placeholder='Major' />
        </Div>
        <Div  >
          <Label htmlFor="graduation">Year of Graduation</Label>
          <Input type="number" autoComplete="off" 
          value = {studentSignUp.graduation}
          onChange = {handleInput}
          name="graduation" id="graduation" placeholder='Enter your year of graduation'/>
        </Div>


        <Div >
          <Label htmlFor="linkedIn">LinkedIn</Label>
          <Input type="url" autoComplete="off" 
          value = {studentSignUp.linkedIn}         onChange = {handleInput}
          name="linkedIn" id="linkedIn" placeholder='Link to your LinkedIn Account' />
        </Div>

        <Div  >
          <Label htmlFor="addInfo">Additional Information</Label>
          <Input type="text" autoComplete="off" 
          value = {studentSignUp.addInfo}
          onChange = {handleInput}
          name="addInfo" id="addInfo" placeholder='Any additional Information' />
        </Div>

        <Button variant = 'cancel' type="submit" onClick={handleCancel}>Cancel </Button>
        <Button type="submit" onClick={handleSubmit}>
          Submit
        </Button>
      </form>
    </Background>
    </div>
  );
}

export default StudentSignUp;
