import React from 'react';
import { Container, LogoImgae, SubTitle, Title } from '../../styles';
import { Image, StyleSheet, Dimensions, RefreshControl, TouchableOpacity } from 'react-native';

export default ({somaValue = 0, allAccounts = 0}) => {
	return (
		<Container height={100} justify='flex-start'>
			<Title Fsize={40} style={LogoImgae.shadowtext}>
				${somaValue}
			</Title>
			<SubTitle color='whiteT' bold shadow style={LogoImgae.shadowtext}>
				NUMERO DE CONTAS REGISTRADAS:{allAccounts}
			</SubTitle>
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
