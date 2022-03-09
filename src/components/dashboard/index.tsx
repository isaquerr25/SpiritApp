import React, { useEffect, useState } from 'react';
import { Image, StyleSheet, Dimensions, RefreshControl, TouchableOpacity } from 'react-native';

import {
	Container, Button, ContainerMax, AddressItem,
	ButtonIcon, Avatar, AddressList, LogoImgae,
	Spacer, Title, SubTitle, VerticalSeparator
} from '../../styles';
import background from '../../assets/background.png';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useDeleteContasMtMutation, useGetContasMtAuthQuery } from '../../generated/graphql';
import { ContaPopup, DeleteContaPopup, SimplePopUp } from '../popup';



const Dashboard = ({ navigation }) => {

	enum statePopup {
		disable,
		delete,
		access,
		error,
		success
	}
	type popUpType = {
		account: string
		invest: string
		status: string
		id: number
		investAberturaInit: number
	}
	const [dataPopUp, setDataPopUp] = useState<any>();

	const [refreshing, setRefreshing] = React.useState(true);
	const contasMt = useGetContasMtAuthQuery();
	const [deleteGraphql,] = useDeleteContasMtMutation();
	const [accontDelete, setAccontDelete] = useState();
	const [infoAcconts, setInfoAcconts] = useState<any>();

	const [popup, setPopup] = useState<statePopup>(0);
	const [msgPopUp, setMsgPopUp] = useState('');
	const wait = (timeout: number | undefined) => {
		return new Promise(resolve => setTimeout(resolve, timeout));
	};

	const onRefresh = React.useCallback(() => {
		console.log('onRefresh');
		setRefreshing(true);
		async function fetchMyAPI() {
			const refConta = await contasMt.refetch();
			const response = refConta.data?.GetContasMtAuth.contas;
			setInfoAcconts(response);
		}
		fetchMyAPI();
		wait(2000).then(() => {

			setRefreshing(false);
		});
	}, []);

	useEffect(() => {
		onRefresh();
	}, []);

	useEffect(() => {
		async function deleteGraphqlInter() {
			console.log('accontDelete ', accontDelete);
			const result = await deleteGraphql({ variables: { id: accontDelete } });
			if (result.data?.deleteContasMt.message == 'success') {
				setPopup(statePopup.success);
			}
			else {
				setPopup(statePopup.error);
			}
			setMsgPopUp(result.data?.deleteContasMt.message == undefined ? 'contact support' : result.data?.deleteContasMt.message);
			console.log(result.data?.deleteContasMt.message);
			onRefresh();
		}
		deleteGraphqlInter();


	}, [accontDelete]);

	useEffect(() => {
		if (infoAcconts != undefined) {
			clearTimeout();
			console.log('paro');
		}

	}, [infoAcconts]);

	const ScreenHeight = Dimensions.get('window').height;

	const ListConstru = ({ items, ItemAccont }) => (

		<AddressList style={{ flex: 1 }}

			data={items}
			renderItem={ItemAccont}

			keyExtractor={(item: { id: any; }) => item.id}
			refreshControl={
				<RefreshControl
					refreshing={refreshing}
					onRefresh={onRefresh}
				/>
			}
		/>
	);

	const ItemAccont = ({ item }) => (
		<AddressItem type='transparent'>
			<Button onPress={() => { setDataPopUp(item); setPopup(2); console.log(item); }} marginD={0} type='transparent'>
				<Container height={60} row justify='flex-start' >
					<ButtonIcon height={60} width={60} type='ground' >
						<Icon name="flash" size={40} color="#FFF701" />
					</ButtonIcon>
					<Container heightM={50} row>
						<Container width={1000}>
							<SubTitle textL bold color='black' small>NUMBER: {item.conta}</SubTitle>
							<SubTitle textL bold color='black' small>PRICE: {item.investAberturaInit == null ? 0 : item.investAberturaInit}</SubTitle>
							<SubTitle textL bold color='black' small>STATUS: {item.work}</SubTitle>
						</Container>
					</Container>
				</Container>
				<Spacer />
				<VerticalSeparator color='grayW' height='3px' width='auto' radius='15px' />
			</Button>
		</AddressItem>
	);
	return (
		<Container color='ground' padding={20} justify='flex-start' height={ScreenHeight} >

			{popup == statePopup.error &&
				<TouchableOpacity style={styles.button} onPress={() => setPopup(statePopup.disable)}>

					<SimplePopUp type='error' msg={msgPopUp} />
				</TouchableOpacity>
			}

			{popup == statePopup.success &&
				<TouchableOpacity style={styles.button} onPress={() => { setPopup(statePopup.disable); navigation.navigate('Home'); }}>
					<SimplePopUp type='accest' msg={msgPopUp} />
				</TouchableOpacity>
			}


			{popup != statePopup.disable &&
				<TouchableOpacity onPress={() => { setPopup(0); }} style={styles.button} >
					{popup == statePopup.access && <ContaPopup action={setPopup} navigation={navigation} item={dataPopUp} />}
					{popup == statePopup.delete && <DeleteContaPopup changeId={setAccontDelete} action={setPopup} item={dataPopUp} />}
				</TouchableOpacity>
			}

			<Image source={background} style={LogoImgae.imagePos} />
			<Container justify='flex-start' height={80} row >

				<Avatar />
				<Spacer width={10} />
				<ContainerMax align='flex-end' >

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

			<Container align='center' justify='flex-start' color="grayN" radius='20px'>

				<Container height={70} row>
					<Button onPress={() => { navigation.navigate('RegisterAccountForex'); }} type='ground' marginD={0} padding width='65%' radius='10px' align='center'>
						<Icon name="plus" size={30} color="#FFFFFF" />
					</Button>
					<ButtonIcon onPress={() => { onRefresh(); }} height={50} width={50} type='ground'  >
						<Icon name="credit-card" size={30} color="#FFFFFF" />
					</ButtonIcon>
				</Container>

				{infoAcconts != undefined &&
					<ListConstru items={infoAcconts} ItemAccont={ItemAccont} />
				}


			</Container>
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

export default Dashboard;
