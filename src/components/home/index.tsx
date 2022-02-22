import React from 'react';
import { View, Image, StyleSheet, Dimensions } from 'react-native';

import {Container , Button, ButtonText, LogoImgae,Title} from '../../styles';
import logo_spirit from '../../assets/logo_spirit.png';
const Home = ({navigation}) => {
	
	const ScreenHeight = Dimensions.get('window').height;
      
	return(
		<Container color='ground' padding={30} justify='flex-start' height={ScreenHeight}>
			
			<Image
				style={LogoImgae.logo}
				source={logo_spirit}
				resizeMode="contain"
			/>
			
			
			<Button marginD={15} radius='15px' onPress={() =>{navigation.navigate('Login');}}>
				<ButtonText>Login</ButtonText>
			</Button>
			
			<Button type='transparent' borderCo='primary' radius='15px' 
				onPress={() =>{navigation.navigate('Register');}}
			>
				<ButtonText color='whiteT'>Register</ButtonText>
			</Button>
			
		</Container>
	);
};



export default Home;