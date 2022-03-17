import React, { useEffect } from 'react';
import { View, Image, StyleSheet, Dimensions , BackHandler} from 'react-native';

import {Container , AddressList} from '../../styles';
import Graph from '../../assets/graph.png';
import Icon  from 'react-native-vector-icons/FontAwesome';
import {ItemAccontNotification, NameBackTop, backPage } from '../utils';

const Notification = ({ navigation }) => {
	
	const ScreenHeight = Dimensions.get('window').height;
	backPage(navigation,'Dashboard');
	return(
		<Container color='ground' padding={20} justify='flex-start' height={ScreenHeight} >
			
			<NameBackTop titleName='Notificações' navigation={navigation} destiny='Dashboard' />

			{/* Aparecer quando não possuir notificações */}
			{/* <SubTitle color='whiteT' bold  active>Não possui notificações</SubTitle> */}
			
			<AddressList

				// data={[{ title: '', msg: '' }]}
				data={[]}

				keyExtractor={(item: { id: any; }) => item.id}
				renderItem={
					ItemAccontNotification
				}
			/>
			
		</Container>
	);
};



export default Notification;