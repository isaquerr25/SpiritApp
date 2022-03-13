import React from 'react';
import { View, Image, StyleSheet, Dimensions } from 'react-native';

import {Container , Button, Title, ButtonText, LogoImgae,Spacer , Input,SubTitle} from '../../styles';
import logo_spirit from '../../assets/logo_spirit.png';
import Icon  from 'react-native-vector-icons/FontAwesome';
import { NameBackTop } from '../utils';

const RestartPassword = ({ navigation }) => {
	
	const ScreenHeight = Dimensions.get('window').height;
      
	return(
		<Container color='ground' padding={30} justify='space-between' height={ScreenHeight} >
			<NameBackTop navigation={navigation} destiny='Profile' titleName='Alterar Password' />
			<Image
				style={LogoImgae.logoHalf}
				source={logo_spirit}
				resizeMode="contain"
			/>
			

			
			<Container justify="space-between" height={175}>
				<Container>
					<SubTitle bold textL color='whiteT'>New Password:</SubTitle>
					<Spacer height={5}/>
					<Input  placeholder='New Password'/>

				</Container>
			
				
				<Input  placeholder='Confirm Password'/>
				
			</Container>
			<Spacer height={40}/>
			<Button marginD={15} radius='15px'>
				<ButtonText>Alterar a Senha</ButtonText>
			</Button>
		</Container>
	);
};



export default RestartPassword;