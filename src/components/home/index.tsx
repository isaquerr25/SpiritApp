import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

import {Container , Button, ButtonText, LogoImgae} from '../../styles';
import logo_spirit from '../../assets/logo_spirit.png';
const Home = () => {
	

      
	return(
		<Container color='ground' padding={30} justify='flex-start'>
			
			<Image
				style={LogoImgae.logo}
				source={logo_spirit}
				resizeMode="contain"
			/>
			
			
			<Button marginD={15}>
				<ButtonText>Login</ButtonText>
			</Button>
			<Button type='transparent' borderCo='primary'  >
				<ButtonText color='whiteT'>Register</ButtonText>
			</Button>
			
		</Container>
	);
};



export default Home;