import React from 'react';
import { View, Image, StyleSheet, Dimensions } from 'react-native';

import {Container , Button, ContainerMax, AddressItem,
	 ButtonIcon,Avatar, AddressList, ButtonText, LogoImgae, 
	 BackGroundImage, Spacer,ContainerImage ,Title ,Input,SubTitle,VerticalSeparator} from '../../styles';
import logo_spirit from '../../assets/logo_spirit.png';
import background from '../../assets/background.png';
import Icon  from 'react-native-vector-icons/FontAwesome';

const Dashboard = () => {
	
	const ScreenHeight = Dimensions.get('window').height;
      
	const ItemAccont = () =>{
		return(
			<AddressItem type='transparent'>
				<Button marginD={0} type='transparent'>
					
					<Container height={60}  row justify='flex-start' >
						<ButtonIcon height={60} width={60} type='ground' >
							<Icon name="flash" size={40} color="#FFF701" />
						</ButtonIcon>
						<Container heightM={50} row>
							
							<Container  width={1000}>
								<SubTitle textL bold color='black' small>NAME: PRINCIPAL</SubTitle>
								<SubTitle textL bold color='black' small>NUMBER: 156489754</SubTitle>
								<SubTitle textL bold color='black' small>STATUS: FUNCIOANDO</SubTitle>
							</Container>
						</Container>
					</Container>
					<Spacer />
					<VerticalSeparator color='grayW' height='3px' width='auto' radius='15px'/>
				</Button>
				
			</AddressItem>
		);
	};
	
	return(
		<Container color='ground' padding={20} justify='flex-start' height={ScreenHeight} >

			<Image source={background} style={LogoImgae.imagePos} />
			<Container  justify='flex-start' height={80} row >

				<Avatar />
				<Spacer width={10}/>
				<ContainerMax    align='flex-end' >
					
					<SubTitle color='whiteT' bold shadow height='60%' style={LogoImgae.shadowtext}>
						CICLO NOVEMBRO
					</SubTitle>
				</ContainerMax>
				
				<ButtonIcon type='transparent'  ><Icon name="info" size={35} color="#F4F4F4" /></ButtonIcon>
				<ButtonIcon type='transparent' ><Icon name="gear" size={35} color="#F4F4F4" /></ButtonIcon>
				
			</Container>
			
			<Container height={100} justify='flex-start'>
				<Title Fsize={40} style={LogoImgae.shadowtext}>
					$1872,00
				</Title>
				<SubTitle color='whiteT' bold shadow style={LogoImgae.shadowtext}>
						NUMERO DE CONTAS ATIVAS:1
				</SubTitle>
			</Container>
			
			<Container  align='center' color="grayN" radius='20px'>
				
				<Container height={70}  row>
					<Button type='ground' marginD={0} padding width='65%' radius='10px' align='center'>
						<Icon name="plus" size={30} color="#FFFFFF" />
					</Button>
					<ButtonIcon  height={50} width={50} type='ground' >
						<Icon name="credit-card" size={30} color="#FFFFFF" />
					</ButtonIcon>
				</Container>

					
				<AddressList data={[1,2	]}
					renderItem={
						ItemAccont
					}				
				>
						
						
				</AddressList>
				
			</Container>
		</Container>
	);
};



export default Dashboard;