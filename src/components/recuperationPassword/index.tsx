import React from 'react';
import { View, Image, StyleSheet, Dimensions } from 'react-native';

import {Container , Button, Title, ButtonText, LogoImgae,Spacer , Input,SubTitle} from '../../styles';
import logo_spirit from '../../assets/logo_spirit.png';
import Icon  from 'react-native-vector-icons/FontAwesome';
import { NameBackTop } from '../utils';

const RecuperationPassword = () => {
	
	const ScreenHeight = Dimensions.get('window').height;
      
	return(
		<Container color='ground' padding={30} justify='space-between' height={ScreenHeight} >
			<NameBackTop  titleName='Restart Senha'/>


			
			<Container justify="space-between" height={250}>
				<Container>
					<SubTitle bold textL color='whiteT'>Senha Antiga:</SubTitle>
					<Spacer height={5}/>
					<Input  placeholder='Senha Antiga'/>

				</Container>
				<Container>
					<SubTitle bold textL color='whiteT'>Nova Senha:</SubTitle>
					<Spacer height={5}/>
					<Input  placeholder='Nova Senha'/>

				</Container>
			
				
				<Input  placeholder='Confirmar Senha'/>
				
			</Container>
			<Spacer height={40}/>
			<Button marginD={15} radius='15px'>
				<ButtonText>Alterar a Senha</ButtonText>
			</Button>
		</Container>
	);
};



export default RecuperationPassword;