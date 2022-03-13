import React, { useEffect, useState } from 'react';
import { View, Image, StyleSheet, Dimensions, ActivityIndicator } from 'react-native';

import {Container , Button, ButtonText, LogoImgae,Title} from '../../styles';
import logo_spirit from '../../assets/logo_spirit.png';
import { useGetUserResolverByTokenQuery } from '../../generated/graphql';

const Home = ({navigation}) => {

	enum statePopup {
		disable,
		success,
		error
	}

	const ScreenHeight = Dimensions.get('window').height;
	const infoUser = useGetUserResolverByTokenQuery();
	const [, setRefreshing] = React.useState(true);
	const [useInfoUser, setInfoUser] = useState<any>('');

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

			if (response == null) {
				setInfoUser(response);
			} else {
				navigation.navigate('Dashboard');
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
		<Container color='ground' padding={30} justify='flex-start' height={ScreenHeight}>

			<Image
				style={LogoImgae.logo}
				source={logo_spirit}
				resizeMode="contain"
			/>

			{useInfoUser != '' &&
				<>
					<Button marginD={15} radius='15px' onPress={() => { navigation.navigate('Login'); }}>
						<ButtonText>Login</ButtonText>
					</Button>
				<Button type='transparent' borderCo='primary' radius='15px' onPress={() => { navigation.navigate('Register'); }}>
					<ButtonText color='whiteT'>Register</ButtonText>
				</Button>
				</>
			}
			{useInfoUser == '' &&
				<ActivityIndicator size="large" color="#00ff00" />

			}

		</Container>
	);
};



export default Home;