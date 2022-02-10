import React from 'react';
import { View, Image, StyleSheet, Dimensions } from 'react-native';

import {Container , Button, ButtonText, LogoImgae,Spacer ,ButtonIcon,ContainerMax, AddressItem, VerticalSeparator, AddressList,Input,SubTitle} from '../../styles';
import Graph from '../../assets/graph.png';
import Icon  from 'react-native-vector-icons/FontAwesome';
import {ItemAccontNotification, NameBackTop } from '../utils';

const Notification = () => {
	
	const ScreenHeight = Dimensions.get('window').height;
	
	return(
		<Container color='ground' padding={20} justify='flex-start' height={ScreenHeight} >
			
			<NameBackTop  titleName='Notificações'/>

			{/* Aparecer quando não possuir notificações */}
			{/* <SubTitle color='whiteT' bold  active>Não possui notificações</SubTitle> */}
			
			<AddressList data={[1,2	]}
				renderItem={
					ItemAccontNotification
				}
			/>
			
		</Container>
	);
};



export default Notification;