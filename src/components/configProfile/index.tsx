import React from 'react';
import { View, Image, StyleSheet, Dimensions } from 'react-native';

import {Container , Button, ButtonText, LogoImgae,Spacer ,VerticalSeparator, Input,SubTitle, Avatar, AvatarSize} from '../../styles';
import logo_spirit from '../../assets/logo_spirit.png';
import Icon  from 'react-native-vector-icons/FontAwesome';
import { NameBackTop } from '../utils';

const ConfigProfile = () => {
	
	const ScreenHeight = Dimensions.get('window').height;
      
	return(
		<Container color='ground' padding={30} justify='space-between' height={ScreenHeight} >
			<NameBackTop  titleName='Configuração'/>
			<Spacer height={20} />

			<AvatarSize size='130px' />

			<Container>
				<Button type='transparent'>
					<Container row>
						<SubTitle bold textL  color='whiteT' >Perfil</SubTitle>
						<Icon name="angle-right" size={30} color="#F4F4F4" />
					</Container>
				</Button>
				<VerticalSeparator color='whiteT' height='1px' width='100%' radius='15px'/>
				
				{/* Direcionar para o Site */}
				<Button type='transparent'>
					<Container row>
						<SubTitle bold textL  color='whiteT' >Perguntas Frequentes</SubTitle>
						<Icon name="angle-right" size={30} color="#F4F4F4" />
					</Container>
				</Button>
				<VerticalSeparator color='whiteT' height='1px' width='100%' radius='15px'/>

				<Button type='transparent'>
					<Container row>
						<SubTitle bold textL  color='whiteT' >Histórico de Ciclos</SubTitle>
						<Icon name="angle-right" size={30} color="#F4F4F4" />
					</Container>
				</Button>
				<VerticalSeparator color='whiteT' height='1px' width='100%' radius='15px'/>
				<Button type='transparent'>
					<Container row>
						<SubTitle bold textL  color='whiteT' >Convide Amigos</SubTitle>
						<Icon name="angle-right" size={30} color="#F4F4F4" />
					</Container>
				</Button>
				<VerticalSeparator color='whiteT' height='1px' width='100%' radius='15px'/>
				<Button type='transparent'>
					<Container row>
						<SubTitle bold textL  color='whiteT' >Notificações</SubTitle>
						<Icon name="angle-right" size={30} color="#F4F4F4" />
					</Container>
				</Button>
				<VerticalSeparator color='whiteT' height='1px' width='100%' radius='15px'/>
			</Container>
			<Spacer height={70} />
			<Button type='redAtencion' radius='15px' >
				<ButtonText color='whiteT'>Sair</ButtonText>
			</Button>
			
		</Container>
		
	);
};



export default ConfigProfile;