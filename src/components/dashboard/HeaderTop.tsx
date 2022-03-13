import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Image, StyleSheet, Dimensions, RefreshControl, TouchableOpacity } from 'react-native';

import { Avatar, ButtonIcon, Container, ContainerMax, LogoImgae, Spacer, SubTitle } from '../../styles';

export default ({ prop }) => {
	return (
		<Container justify='flex-start' height={80} row>

			<Avatar />
			<Spacer width={10} />
			<ContainerMax align='flex-end'>

				<SubTitle color='whiteT' bold shadow height='60%' style={LogoImgae.shadowtext}>
					CICLO NOVEMBRO
				</SubTitle>
			</ContainerMax>

			<ButtonIcon onPress={() => { prop.navigate('Notification'); }} type='transparent'>
				<Icon name="info" size={35} color="#F4F4F4" />
			</ButtonIcon>
			<ButtonIcon onPress={() => { prop.navigate('ConfigProfile'); }} type='transparent'>
				<Icon name="gear" size={35} color="#F4F4F4" />
			</ButtonIcon>
		</Container>
	);
};
const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		paddingHorizontal: 10
	},
	button: {
		flex: 1,
		alignSelf: 'center',
		resizeMode: 'cover',
		alignItems: 'center',
		backgroundColor: '#0000006e',
		top: 0, left: 0, right: 0, bottom: 0,
		zIndex: 9999999,
		position: 'absolute'
	},
	countContainer: {
		alignItems: 'center',
		padding: 10
	}
});