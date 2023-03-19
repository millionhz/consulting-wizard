import React, { useState, useContext } from 'react';
import { UserContext } from '../context/UserContext';
import { Button, Box, Container, Grid, TextField } from '@mui/material';
import styled from '@emotion/styled';



function LogInPage() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const { logIn } = useContext(UserContext);

	const handleEmailChange = (e) => {
		setEmail(e.target.value);
	};

	const handlePasswordChange = (e) => {
		setPassword(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		logIn(email, password)
			.then(() => {
				window.location.reload();
			})
			.catch((err) => {
				console.log(err);
			});
	};

	return (
		// <form>
		//   <label htmlFor="email">Email</label>
		//   <input
		//     type="email"
		//     name="email"
		//     value={email}
		//     onChange={handleEmailChange}
		//   />
		//   <label htmlFor="password">Password</label>
		//   <input
		//     type="password"
		//     name="password"
		//     value={password}
		//     onChange={handlePasswordChange}
		//   />
		//   <Button type="submit" onClick={handleSubmit}>
		//     Log In
		//   </Button>
		// </form>
		// <Box bgcolor={'white'} width={500} height={500} borderRadius={'10%'}>

		// </Box>
		<Grid container direction={'column'} bgcolor={'white'} width={700} height={500} borderRadius={'20px'} alignContent={true} padding={5}>
			<Grid container direction={'column'} bgcolor={'white'} width={200} height={500} borderRadius={'20px'} alignContent={true} padding={5}>

				<Triangle></Triangle>
				<Square></Square>
				<Circle></Circle>
			</Grid>
			<Grid container direction={'column'} bgcolor={'#E9D6EC'} width={400} height={500} borderRadius={'20px'} alignContent={true} padding={5}>
				<Grid item xl={3} md={3} sm={3} xs={3}>
					<br></br>
					<Title> Welcome Back!</Title>
					<Subtitle fontFamily={'Inter'}>
						Welcome Back. Please enter your details
					</Subtitle>
				</Grid>
				<Grid item xl={3} md={3} sm={3} xs={3} marginBottom={-4}>
					{/* <Grid item xl={3} md={3} sm={3} xs={3} alignContent={true}>
        
        </Grid> */}
					<Grid item xl={3} md={3} sm={3} xs={3} paddingLeft={8.3} fontSize={11} color={"#786E6E"} fontWeight={500}>
						Email:
					</Grid>
					<TextField
						style={{
							backgroundColor: "white",
							borderRadius: "4px",

						}}
						InputProps={{
							style: {
								width: "190px",
								height: "25px",
							}
						}}
						className='inputbox'
						id="outlined-input"
						label="Please enter your email address"
						name="email"
						onChange={handleEmailChange}


					/>
				</Grid>
				<Grid item xl={3} md={3} sm={3} xs={3}>
					<Grid item xl={3} md={3} sm={3} xs={3} paddingLeft={8.3} fontSize={11} color={"#786E6E"} fontWeight={500}>
						Password:
					</Grid>
					<TextField
						style={{
							backgroundColor: "white",
							borderRadius: "4px",

						}}
						InputProps={{
							style: {
								width: "190px",
								height: "25px",
							}
						}}

						InputLabelProps={{
							// shrink: false,

						}}
						id="password"
						label="password"
						name="password"
						onChange={handlePasswordChange}
					/>
				</Grid>
				<Grid item xl={3} md={3} sm={3} xs={3}>
					<Button
						variant='outlined'
						sx={{ color: 'white', backgroundColor: '#0b0b45', borderColor: '#0b0b45' }}
						onClick={handleSubmit}
						style={{
							height: 25,
							width: 190,
							fontSize: 9,
							paddingTop: 6,
							fontWeight: 400,
							textTransform: "none",
						}}
					>
						Log In
					</Button>
				</Grid>
			</Grid>
		</Grid>


	);
}


const styles = theme => ({
	textField: {
		// width: '90%',
		// marginLeft: 'auto',
		// marginRight: 'auto',            
		// paddingBottom: 0,
		// marginTop: 0,
		// fontWeight: 500
	},
	input: {
		color: 'white'
	}
});

const Title = styled.div`
	font-weight: 800;
	font-family: Inter;
`;


const Subtitle = styled.div`
font-size: 6.9px;
font-family: Inter;
font-weight: 500;
`;

const Square = styled.div`
background-color: #96BDC6;
height: 60px;
width: 60px;
position: relative;
top: 50px;
right: -50px;
`;

const Circle = styled.div`
background-color: #0B0B45;
height: 60px;
width: 60px;
position: relative;
top: 30px;
right: -25px;
border-radius: 30px;
`;

const Triangle = styled.div`
background-color: white;
width: 0; 
height: 0; 
border-left: 30px solid transparent;
border-right: 30px solid transparent;
border-bottom: 60px solid #E9D6EC;
position: relative;
top: 110px;
right: 20px;
`;

export default LogInPage;
