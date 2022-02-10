import React from 'react';
import { View, Image, StyleSheet, Dimensions } from 'react-native';

import {Container , Button, Title, ButtonText, LogoImgae,Spacer , Input,SubTitle} from '../../styles';
import logo_spirit from '../../assets/logo_spirit.png';
import Icon  from 'react-native-vector-icons/FontAwesome';

const ConfirmCode = () => {
	
	const ScreenHeight = Dimensions.get('window').height;
      
	return(
		<Container color='ground' padding={30} justify='space-between' height={ScreenHeight} >
			<Button type='ground' ><Icon name="angle-left" size={30} color="#F4F4F4" /></Button>
			<Image
				style={LogoImgae.logoHalf}
				source={logo_spirit}
				resizeMode="contain"
			/>
			

			<Title>DIGITE O CÓDIGO ENVIADO</Title>
			<Spacer />
			<Input  placeholder='Code'/>
			<Spacer height={150}/>
			<Button radius='15px'>
				<ButtonText>Confirmar</ButtonText>
			</Button>
		</Container>
	);
};



export default ConfirmCode;