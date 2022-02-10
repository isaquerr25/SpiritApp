import React from 'react';
import { View, Image, StyleSheet, Dimensions } from 'react-native';

import {Container , Button, ButtonText, LogoImgae,Spacer ,ButtonIcon,ContainerMax, Input,SubTitle} from '../../styles';
import Graph from '../../assets/graph.png';
import Icon  from 'react-native-vector-icons/FontAwesome';
import { NameBackTop } from '../utils';

const RegisterAccountForex = () => {
	
	const ScreenHeight = Dimensions.get('window').height;
      
	return(
		<Container color='ground' padding={30} justify='space-between' height={ScreenHeight} >
			
			<NameBackTop  titleName='Registro De Nova Conta'/>
			
			<Container borderCo='redAtencion' radius='15px' padding={10} height={120}  >
				<SubTitle color='redAtencion' small>
					Todas as informações sobre a conta forex são fornecidas 
					pela correntora e devem sem escritas de acordo como foram
					fornecidas. O valor da conta será a soma dos bonus com o valor
					real. Nome da conta poderá ser escolhido pelo usuário.
				</SubTitle>
			</Container>
			
			<Container row height={70}>
				<Image
					style={LogoImgae.logoGraph}
					source={Graph}
					resizeMode="contain"
				/>
				<Image
					style={LogoImgae.transformRotateImage}
					source={Graph}
					resizeMode="contain"
				/>
			</Container>

			
			<Input  placeholder='NOME PARA CONTA'/>
			<Input  placeholder='NUMERO DA CONTA FOREX'/>
			<Input  placeholder='SENHA'/>
			<Input  placeholder='SERVIDOR'/>
			<Input  placeholder='VALOR EM REAL EM CONTA'/>
			<Input  placeholder='VALOR EM BONUS'/>
			
			
			<Spacer height={1}/>
			
			<Button  radius='15px' >
				<ButtonText >NOVA CONTA FOREX</ButtonText>
			</Button>
		</Container>
	);
};



export default RegisterAccountForex;