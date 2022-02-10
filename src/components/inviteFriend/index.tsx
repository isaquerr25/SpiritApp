import React from 'react';
import { View, Image, StyleSheet, Dimensions } from 'react-native';

import {Container , Button, ButtonText, LogoImgae,Spacer ,Title ,VerticalSeparator, Input,SubTitle, Avatar, AvatarSize} from '../../styles';
import logo_spirit from '../../assets/logo_spirit.png';
import Icon  from 'react-native-vector-icons/FontAwesome';
import { NameBackTop } from '../utils';

const InviteFriend = () => {
	
	const ScreenHeight = Dimensions.get('window').height;
      
	return(
		<Container color='ground' padding={30} justify='space-between' height={ScreenHeight} >
			
			<NameBackTop  titleName='Convide um Amigo'/>
			<Spacer height={20} />
			<Input numberOfLines={1} placeholder='spiritgoldforex.com/asdasda'/>
			<Spacer  height={20} />
			<Button type='transparent' borderCo='primary' radius='15px' >
				<ButtonText color='whiteT'>Copiar</ButtonText>
			</Button>
			<Spacer  height={20} />
			<Title textL>
					Ganhe bonus por indicação
			</Title> 
			<Spacer height={20} />
			<SubTitle textL padding color='whiteT'>Para receber bonus necessita ter: </SubTitle>
			<Spacer />
			<SubTitle textL padding color='whiteT'> minimo 1 conta válidada e ativa</SubTitle>
			<Spacer />
			<SubTitle textL padding color='whiteT'> $2000 dólares investidos</SubTitle>
			<Spacer />
			<SubTitle textL padding color='whiteT'> E ter se cadastrado no painel bônus</SubTitle>
				
		
			<Spacer height={150} />
			<Button  radius='15px' >
				<ButtonText >Painel Bônus</ButtonText>
			</Button>
		</Container>
		
	);
};



export default InviteFriend;