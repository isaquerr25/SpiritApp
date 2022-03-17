import React from 'react';
import { View, Image, StyleSheet, Dimensions, Linking } from 'react-native';

import {Container , Button, ButtonText, LogoImgae,Spacer ,VerticalSeparator, Input,SubTitle, Avatar, AvatarSize} from '../../styles';
import logo_spirit from '../../assets/logo_spirit.png';
import Icon  from 'react-native-vector-icons/FontAwesome';
import { NameBackTop, backPage } from '../utils';
import { client } from '../../../App';
import { useLogoutMutation } from '../../generated/graphql';
const ConfigProfile = ({ navigation }) => {

	const [logoutGraph,] = useLogoutMutation();
	const ScreenHeight = Dimensions.get('window').height;

	const openWEB = () => {

		Linking.openURL('https://www.spiritgoldforex.com/perguntas-frequentes');
	};
	backPage(navigation,'Dashboard');
	const flush = async () =>{

		await logoutGraph();
		await client.cache.gc(); // or localStorage
		await client.resetStore();
		navigation.navigate('Home');

	};
	return(
		<Container color='ground' padding={30} justify='space-between' height={ScreenHeight} >
			<NameBackTop navigation={navigation} destiny='Dashboard' titleName='Configuração' />
			<Spacer height={20} />

			<AvatarSize size='130px' />

			<Container>
				<Button type='transparent' onPress={() => { navigation.navigate('Profile'); }}>
					<Container row>
						<SubTitle bold textL  color='whiteT' >Perfil</SubTitle>
						<Icon name="angle-right" size={30} color="#F4F4F4" />
					</Container>
				</Button>
				<VerticalSeparator color='whiteT' height='1px' width='100%' radius='15px'/>

				<Button type='transparent'>
					<Container row>
						<SubTitle bold textL onPress={() => { openWEB(); }} color='whiteT' >Perguntas Frequentes</SubTitle>
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
						<SubTitle bold textL color='black' >Convide Amigos</SubTitle>
						<Icon name="angle-right" size={30} color="#000" />
					</Container>
				</Button>
				<VerticalSeparator color='black' height='1px' width='100%' radius='15px' />
			</Container>

			<Spacer height={70} />

			<Button type='redAtencion' onPress={()=>{flush();}} radius='15px' >
				<ButtonText color='whiteT'>Sair</ButtonText>
			</Button>

		</Container>

	);
};



export default ConfigProfile;