import React from 'react';
import { View, Image, StyleSheet, Dimensions } from 'react-native';

import {Container , Button, ButtonText, LogoImgae,Spacer ,VerticalSeparator, Input,SubTitle, Avatar, AvatarSize} from '../../styles';
import logo_spirit from '../../assets/logo_spirit.png';
import Icon  from 'react-native-vector-icons/FontAwesome';
import { NameBackTop } from '../utils';

const Profile = () => {
	
	const ScreenHeight = Dimensions.get('window').height;
      
	return(
		<Container color='ground' padding={30} justify='flex-start'  flexP height={ScreenHeight} >
			<NameBackTop  titleName='Perfil'/>
			<Spacer height={20} />

			<AvatarSize size='130px' />

			<Container>
				<Button type='transparent'>
					<Container row>
						<SubTitle bold textL  color='whiteT' >Nome: Isaque Ferreira</SubTitle>
						
					</Container>
				</Button>
				<VerticalSeparator color='whiteT' height='1px' width='100%' radius='15px'/>
				<Button type='transparent'>
					<Container row>
						<SubTitle bold textL  color='whiteT' numberOfLines={1}>Email:isaqueribeiro964@gmail.com</SubTitle>
						<Icon name="angle-right" size={30} color="#FF655000" />
					</Container>
				</Button>
				<VerticalSeparator color='whiteT' height='1px' width='100%' radius='15px'/>
				<Button type='transparent'>
					<Container row>
						<SubTitle bold textL  color='whiteT' >Alterar Senha</SubTitle>
						<Icon name="angle-right" size={30} color="#F4F4F4" />
					</Container>
				</Button>
				<VerticalSeparator color='whiteT' height='1px' width='100%' radius='15px'/>
				
			</Container>
			<Spacer height={200} />

		
		</Container>
		
	);
};



export default Profile;