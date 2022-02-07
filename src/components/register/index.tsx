import React from 'react';
import { View, Image, StyleSheet, Dimensions } from 'react-native';

import {Container , Button, ButtonText, LogoImgae,Spacer , Input,SubTitle} from '../../styles';
import logo_spirit from '../../assets/logo_spirit.png';
const Register = () => {
	
	const ScreenHeight = Dimensions.get('window').height;
      
	return(
		<Container color='ground' padding={30} justify='space-between' height={ScreenHeight} >
			
			<Image
				style={LogoImgae.logoHalf}
				source={logo_spirit}
				resizeMode="contain"
			/>
			

			<Input  placeholder='Nome'/>
			<Input  placeholder='Email'/>
			<Input  placeholder='Confirm Email'/>
			<Input  placeholder='CPF'/>
			<Input  placeholder='Password'/>
			<Input  placeholder='Confirm Password'/>

			<Button  type='transparent' borderCo='primary'  >
				<ButtonText color='whiteT'>Register</ButtonText>
			</Button>
		</Container>
	);
};



export default Register;