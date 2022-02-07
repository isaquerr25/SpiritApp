import React from 'react';
import { View, Image, StyleSheet, Dimensions } from 'react-native';

import {Container , Button, ButtonText, LogoImgae,Spacer , Input,SubTitle} from '../../styles';
import logo_spirit from '../../assets/logo_spirit.png';
const Login = () => {
	
	const ScreenHeight = Dimensions.get('window').height;
      
	return(
		<Container color='ground' padding={30} justify='flex-start' height={ScreenHeight} >
			
			<Image
				style={LogoImgae.logo}
				source={logo_spirit}
				resizeMode="contain"
			/>
			<Container justify="space-between" height={150}>
				<Input  placeholder='Email'/>
			
				
				<Input  placeholder='Password'/>
				<SubTitle textL >Esqueci minha senha.</SubTitle>
				
			</Container>
			<Spacer height={40}/>
			<Button marginD={15}>
				<ButtonText>Login</ButtonText>
			</Button>
			
		</Container>
	);
};



export default Login;