import React, { useEffect, useState } from 'react';
import { View, Image, StyleSheet, Dimensions } from 'react-native';

import {Container , Button, ContainerMax, AddressItem,
	 ButtonIcon,Avatar, AddressList, ButtonText, LogoImgae, 
	 BackGroundImage, Spacer,ContainerImage ,Title ,Input,SubTitle,VerticalSeparator} from '../../styles';
import logo_spirit from '../../assets/logo_spirit.png';
import background from '../../assets/background.png';
import Icon  from 'react-native-vector-icons/FontAwesome';
import { useGetContasMtAuthMutation } from '../../generated/graphql';

interface ItemAccontConta {
	conta: number
	investAtual: number
	work : string
}
const Dashboard = ({navigation}) => {
	

	const [setContasMt,contasMt] = useGetContasMtAuthMutation();
	const [infoAcconts,setInfoAcconts] = useState<any>();


	useEffect( () => {
		async function fetchMyAPI(){
			
			const response  = await setContasMt({variables:{}});
			
			setInfoAcconts(response.data?.GetContasMtAuth);
		}
		fetchMyAPI();
	},[]);

	useEffect( () => {
		console.log('jjjjjj',infoAcconts);
	},[infoAcconts]);
	
	const ScreenHeight = Dimensions.get('window').height;
 
	const ItemAccont = ({item}) =>(
		<AddressItem type='transparent'>
			<Button marginD={0} type='transparent'>
					
				<Container height={60}  row justify='flex-start' >
					<ButtonIcon height={60} width={60} type='ground' >
						<Icon name="flash" size={40} color="#FFF701" />
					</ButtonIcon>
					<Container heightM={50} row>
							
						<Container  width={1000}>
							{/* <SubTitle textL bold color='black' small>NUMBER: NUMBER</SubTitle>
							<SubTitle textL bold color='black' small>PRICE: NUMBER</SubTitle>
							<SubTitle textL bold color='black' small>STATUS: NUMBER</SubTitle> */}
							<SubTitle textL bold color='black' small>NUMBER: {item.conta}</SubTitle>
							<SubTitle textL bold color='black' small>PRICE: {item.investAtual}</SubTitle>
							<SubTitle textL bold color='black' small>STATUS: {item.work}</SubTitle>
						</Container>
					</Container>
				</Container>
				<Spacer />
				<VerticalSeparator color='grayW' height='3px' width='auto' radius='15px'/>
			</Button>
				
		</AddressItem>
	);
	
	
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
			
			<Container  align='center' justify='flex-start' color="grayN" radius='20px'>
				
				<Container height={70}  row>
					<Button onPress={()=>{navigation.navigate('RegisterAccountForex');}} type='ground' marginD={0} padding width='65%' radius='10px' align='center'>
						<Icon name="plus" size={30} color="#FFFFFF" />
					</Button>
					<ButtonIcon onPress={()=>{navigation.navigate('Login');} } height={50} width={50} type='ground'  >
						<Icon name="credit-card" size={30} color="#FFFFFF" />
					</ButtonIcon>
				</Container>
				
				{ infoAcconts!=undefined &&
					<AddressList data={infoAcconts}
						renderItem={ItemAccont}
						keyExtractor={item => item.id}				
					>
					</AddressList>
				}

				
			</Container>
		</Container>
	);
};



export default Dashboard;