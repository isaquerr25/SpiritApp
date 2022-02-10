import React from 'react';
import { View, Image, StyleSheet, Dimensions } from 'react-native';

import {Container , Button, ButtonText, LogoImgae,Spacer , Input,SubTitle} from '../../styles';
import Graph from '../../assets/graph.png';
import Icon  from 'react-native-vector-icons/FontAwesome';

const UpdateAccount = () => {
	
	const ScreenHeight = Dimensions.get('window').height;
      
	return(
		<Container color='ground' padding={30} justify='space-between' height={ScreenHeight} >
			
			<Container borderCo='redAtencion' radius='15px' padding={20} height={140}  >
				<SubTitle color='redAtencion' small>
					Todas as informações sobre a conta forex são fornecidas 
					pela correntora e devem sem escritas de acordo como foram
					fornecidas. O valor da conta será a soma dos bonus com o valor
					real. Nome da conta poderá ser escolhido pelo usuário.
				</SubTitle>
			</Container>
			
			<Container row height={90}>
				<Button type='transparent' width='30%' marginD={0} padding radius='10px' align='center'>
					<Icon name="play-circle" size={70} color="#FFFFFF" />
				</Button>
				<Container  height={60} justify='space-between'>
					<SubTitle color='whiteT' textL bold>Status:</SubTitle>
					<SubTitle color='whiteT' textL bold>Funcioando</SubTitle>
				</Container>

				<Image
					style={LogoImgae.logoGraph}
					source={Graph}
					resizeMode="contain"
				/>
			</Container>

			
			<Input  placeholder='NOME PARA CONTA'/>
			<Input  placeholder='NUMERO DA CONTA FOREX'/>
			<Input  placeholder='SENHA'/>
			<Input  placeholder='SERVIDOR'/>
			<Input  placeholder='VALOR EM CONTA'/>
			
			
			<Spacer height={1}/>
			
			<Button  radius='15px' >
				<ButtonText >Atualizar</ButtonText>
			</Button>
		</Container>
	);
};



export default UpdateAccount;