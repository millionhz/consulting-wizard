/* eslint-disable prefer-destructuring */
/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { Background, Input, Label, Div, Button, ErrorDiv} from '../components/StyledComponents.styles';
import Header from '../components/SignUpHeader';

function CounsellorSignUp() {

  const [counsellorSignUp, setcounsellorSignUp] = useState({
    fname :'',
    lname: '',
    email :'',
    password:'',
    confirmPassword : '',
    major: '',
    graduation :'', 
    current: '',
    linkedIn: '',
    addInfo: ''

  });
  const [profiles,setProfiles] = useState([]);
  const [passwordError, setPasswordError] = useState('');
  const [passwordFormat, setPasswordFormat] = useState('');
  const [emailError, setEmailError] = useState('');
  const [linkedInError, setlinkedInError] = useState('');

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setcounsellorSignUp({...counsellorSignUp, [name]: value})
  };

  const handleCancel = () => {
    // clear all input fields.
    setcounsellorSignUp({fname :'',lname: '',email :'',password:'', confirmPassword: '', major: '',graduation :'', current:'', linkedIn: '',addInfo: ''})
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const pass = document.getElementById('password').value;
    const cPass = document.getElementById('confirmPassword').value;
    const email = document.getElementById('email').value;
    const linkedIn = document.getElementById('linkedIn').value; 
    const regex = /^(ftp|http|https):\/\/[^ "]+$/;
    
    if (!regex.test(linkedIn)) {
      setlinkedInError('Please input a valid link');
    } else {
      setlinkedInError('');
    }
    if (pass.length < 8 ){
      setPasswordFormat('Password must be 8 characters at least');
    }
    else {setPasswordFormat('');}
    if (!email.includes('@lums.edu.pk')) {
      setEmailError('Please enter a valid email address. You can only input your LUMS email ID');
    } else {
      setEmailError('');
    }

    if (pass !== cPass) {
      setPasswordError('Passwords do not match!');
    } else {
      setPasswordError('');
    }
    if (!emailError && !passwordError && !passwordFormat && !linkedInError)
    {
      const newCounsellor = {...counsellorSignUp, id:new Date().getTime().toString()}
      // console.log(newCounsellor);
      setProfiles([...profiles, newCounsellor]); 
      // add axios working here. 
    }
   
    setcounsellorSignUp({fname :'',lname: '',email :'',password:'',confirmPassword: '', major: '',graduation :'',current:'',  linkedIn: '',addInfo: ''})
  };

  return (
    <div>
      <Header page = 'Counsellor Sign Up'/>
      <Background>
        
      <h3> Fill in the details to join us as a Counselor!</h3>
      <form>
        <Div align ="left" >
          <Label htmlFor="fname">First Name</Label>
          <Input type="text" autoComplete="off" 
          value = {counsellorSignUp.fname}
          onChange = {handleInput}
          name="fname" id="fname" placeholder='First Name' />
        </Div>
        <Div  >
          <Label htmlFor="lname">Last Name</Label>
          <Input type="text" autoComplete="off" 
          value = {counsellorSignUp.lname}          
          onChange = {handleInput}
          name="lname" id="lname" placeholder='Last Name' />
        </Div>
        <Div >
          <Label htmlFor="email">Email</Label>
          <Input type="email" autoComplete="off" 
          value = {counsellorSignUp.email}      
          onChange = {handleInput}
          name="email" id="email" placeholder='Email Address' />
        </Div>
        <ErrorDiv>{emailError}</ErrorDiv>
        <Div>
          <Label htmlFor="password">Password</Label>
          <Input type="password" autoComplete="off" 
          value = {counsellorSignUp.password}         
          onChange = {handleInput}
          name="password" id="password" placeholder='Password' />
        </Div>
        <ErrorDiv>{passwordFormat}</ErrorDiv>
        <Div>
          <Label htmlFor="confirmPassword">Confirm Password</Label>
          <Input type="password" autoComplete="off" 
          value = {counsellorSignUp.confirmPassword}         
          onChange = {handleInput}
          name="confirmPassword" id="confirmPassword" placeholder='Confirm Password' />
        </Div>
        <ErrorDiv>{passwordError}</ErrorDiv>
        <Div > 
          <Label htmlFor="major">Major</Label>
          <Input type="text" autoComplete="off" 
          value = {counsellorSignUp.major}     
          onChange = {handleInput}
          name="major" id="major" placeholder='Major' />
        </Div>
        <Div  >
          <Label htmlFor="graduation">Year of Graduation</Label>
          <Input type="number" autoComplete="off" 
          value = {counsellorSignUp.graduation}
          onChange = {handleInput}
          name="graduation" id="graduation" placeholder='Enter your year of graduation'/>
        </Div>
        <Div  >
          <Label htmlFor="graduation">Current University/Company</Label>
          <Input type="current" autoComplete="off" 
          value = {counsellorSignUp.current}
          onChange = {handleInput}
          name="current" id="current" placeholder='Enter your current university/company'/>
        </Div>

        <Div >
          <Label htmlFor="linkedIn">LinkedIn</Label>
          <Input type="url" autoComplete="off" 
          value = {counsellorSignUp.linkedIn}         onChange = {handleInput}
          name="linkedIn" id="linkedIn" placeholder='Link to your LinkedIn Account' />
        </Div>
        <ErrorDiv>{linkedInError}</ErrorDiv>
        <Div>
          <Label htmlFor="addInfo">Additional Information</Label>
          <Input type="text" autoComplete="off" 
          value = {counsellorSignUp.addInfo}
          onChange = {handleInput}
          name="addInfo" id="addInfo" placeholder='Any additional Information' />
        </Div>

        <Button variant = 'cancel' type="submit" onClick={handleCancel}>Cancel </Button>
        <Button  type="submit" onClick={handleSubmit} disabled={!counsellorSignUp.email || !counsellorSignUp.password || !counsellorSignUp.confirmPassword ||!counsellorSignUp.fname ||!counsellorSignUp.lname ||!counsellorSignUp.linkedIn ||!counsellorSignUp.major ||!counsellorSignUp.graduation || !counsellorSignUp.current}>
          Submit
        </Button>
      </form>
    </Background>
    </div>
  );
}

export default CounsellorSignUp;
