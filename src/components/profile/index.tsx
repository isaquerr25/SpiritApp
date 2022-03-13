import React, { useEffect, useState } from 'react';
import { View, Image, StyleSheet, Dimensions } from 'react-native';

import {Container , Button, ButtonText, LogoImgae,Spacer ,VerticalSeparator, Input,SubTitle, Avatar, AvatarSize} from '../../styles';
import logo_spirit from '../../assets/logo_spirit.png';
import Icon  from 'react-native-vector-icons/FontAwesome';
import { NameBackTop } from '../utils';
import { useGetUserResolverByTokenQuery } from '../../generated/graphql';
import { SimplePopUp } from '../popup';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Profile = ({ navigation }) => {
	enum statePopup {
		disable,
		success,
		error
	}

	const [erroMsg, setErroMsg] = useState('');
	const ScreenHeight = Dimensions.get('window').height;
	const infoUser = useGetUserResolverByTokenQuery();
	const [refreshing, setRefreshing] = React.useState(true);
	const [useInfoUser, setInfoUser] = useState<any>();
	const [popup, setPopup] = useState<statePopup>(0);

	const wait = (timeout: number | undefined) => {
		return new Promise(resolve => setTimeout(resolve, timeout));
	};

	const onRefresh = React.useCallback(() => {
		console.log('onRefresh');
		setRefreshing(true);
		async function fetchMyAPI() {

			const refConta = await infoUser.refetch();
			console.log('onRefresh ', refConta);
			const response = refConta.data.GetUserResolverByToken;
			console.log('onRefresh ', response);
			setInfoUser(response);
			if (response == null) {
				setPopup(statePopup.error);
			}
		}
		fetchMyAPI();
		wait(2000).then(() => {

			setRefreshing(false);
		});
	}, []);

	useEffect(() => {
		onRefresh();
		console.log(infoUser);
	}, []
	);


	return(
		<Container color='ground' padding={30} justify='flex-start'  flexP height={ScreenHeight} >
			<NameBackTop navigation={navigation} destiny='Dashboard' titleName='Perfil' />

			<Spacer height={20} />

			<AvatarSize size='130px' />

			{useInfoUser != null &&
				<Container>
					<Button type='transparent'>
						<Container row>
							<SubTitle bold textL color='whiteT' >Nome:{useInfoUser.firstName + ' ' + useInfoUser.lastName}</SubTitle>

						</Container>
					</Button>
					<VerticalSeparator color='whiteT' height='1px' width='100%' radius='15px' />
					<Button type='transparent'>
						<Container row>
							<SubTitle bold textL color='whiteT' numberOfLines={1}>Email:{useInfoUser.email}</SubTitle>
							<Icon name="angle-right" size={30} color="#FF655000" />
						</Container>
					</Button>
					<VerticalSeparator color='whiteT' height='1px' width='100%' radius='15px' />
					<Button type='transparent' onPress={() => { navigation.navigate('RecuperationPassword'); }}>
						<Container row>
							<SubTitle bold textL color='whiteT' >Alterar Senha</SubTitle>
							<Icon name="angle-right" size={30} color="#F4F4F4" />
						</Container>
					</Button>
					<VerticalSeparator color='whiteT' height='1px' width='100%' radius='15px' />

				</Container>
			}
			{useInfoUser == null &&

				<SubTitle bold textL color='whiteT' numberOfLines={1}>Carregando Dados</SubTitle>

			}
			<Spacer height={200} />


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


export default Profile;
