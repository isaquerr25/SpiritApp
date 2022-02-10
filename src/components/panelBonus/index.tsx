import React from 'react';
import { View, Image, StyleSheet, Dimensions } from 'react-native';

import {Container , Button, ButtonText, LogoImgae,Spacer ,Title ,VerticalSeparator, Input,SubTitle, Avatar, AvatarSize} from '../../styles';
import logo_spirit from '../../assets/logo_spirit.png';
import Icon  from 'react-native-vector-icons/FontAwesome';
import { NameBackTop } from '../utils';

const PanelBonus = () => {
	
	const ScreenHeight = Dimensions.get('window').height;
      
	return(
		<Container color='ground' padding={30} justify='space-between' height={ScreenHeight} >
			
			<NameBackTop  titleName='Painel Bônus'/>
			
			<Title >
					Chave do PIX
			</Title>
			<Input numberOfLines={1} placeholder='Digite sua nova Chave Do PIX'/>

			
			
			<Title textL>
					Chave Atual:
			</Title> 
			<SubTitle textL  color='whiteT'>isaqueribeiro964@gmail.com</SubTitle>
			
			<SubTitle textL  color='whiteT'>Os valores podem ser enviados até o final do mês.</SubTitle>
			<SubTitle textL  color='whiteT'>
				O saldo enviado não é fixo. Dependerá tando do mercado
				quanto do seu indicado no pagamento.
			</SubTitle>
			
		
			<Spacer height={150} />
			<Button type='transparent' borderCo='primary' radius='15px' >
				<ButtonText color='whiteT'>Atualizar</ButtonText>
			</Button>
		</Container>
		
	);
};



export default PanelBonus;