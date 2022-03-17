import React, { useEffect, useState } from 'react';
import { View, Image, StyleSheet, Dimensions, RefreshControl } from 'react-native';

import {Container , Button, ButtonText, LogoImgae,Spacer ,ButtonIcon,ContainerMax, AddressItem, VerticalSeparator, AddressList,Input,SubTitle} from '../../styles';
import Graph from '../../assets/graph.png';
import Icon  from 'react-native-vector-icons/FontAwesome';
import {ItemAccontNotification, NameBackTop, ServerForexCiclos, backPage } from '../utils';
import { useFaturasByContasIdQuery } from '../../generated/graphql';

const PagamentoCiclos = ({ navigation }) => {


	enum statePopup {
		disable,
		delete,
		access
	}

	const [dataPopUp, setDataPopUp] = useState({ account: '', invest: '', status: '' });
	const [refreshing, setRefreshing] = useState(true);
	const contaFaturas = useFaturasByContasIdQuery({ variables: { contaId: 10 } });
	const [itensFaturas, setInfoAcconts] = useState<any>();
	const [popup, setPopup] = useState<statePopup>(0);


	backPage(navigation,'Dashboard');
	const wait = (timeout: number | undefined) => {
		return new Promise(resolve => setTimeout(resolve, timeout));
	};

	const onRefresh = React.useCallback(() => {
		console.log('onRefresh');
		console.log(navigation.state.params.item.id);
		setRefreshing(true);
		async function fetchMyAPI() {
			const refConta = await contaFaturas.refetch();
			console.log('onRefresh ', refConta);
			const response = refConta.data?.faturasByContasId;
			setInfoAcconts(response);
		}
		fetchMyAPI();
		wait(2000).then(() => {

			setRefreshing(false);
		});

	}, []);

	useEffect(() => {
		console.log('items', navigation.state.params.item);
		onRefresh();
	}, []);

	useEffect(() => {
		if (itensFaturas != undefined) {
			clearTimeout();
			console.log('paro');
		}

	}, [itensFaturas]);
	
	const ScreenHeight = Dimensions.get('window').height;
	
	const ListConstru = ({ items, ConstructIndex }) => (

		<AddressList style={{ flex: 1 }}

			data={items}
			renderItem={ConstructIndex}

			keyExtractor={(item: { id: any; }) => item.id}
			refreshControl={
				<RefreshControl
					refreshing={refreshing}
					onRefresh={onRefresh}
				/>
			}
		/>
	);

	const ConstructIndex = ({ item }) => (
		<AddressItem type='transparent'>
			<Button onPress={() => { setDataPopUp({ account: item.conta, invest: item.investAberturaInit, status: item.work }); setPopup(2); console.log(item); }} marginD={0} type='transparent'>
				<Spacer />
				<Spacer />

				<Container height={60} row justify='flex-start' >
					<ButtonIcon height={60} width={60} type='ground' >
						<Icon name="flash" size={40} color="#FFF701" />
					</ButtonIcon>
					<Container heightM={50} row>

						<Container width={1000}>
							<SubTitle textL bold color='whiteT' small>Titulo: {item.titulo}</SubTitle>
							<SubTitle textL bold color='whiteT' small>PRICE: USD {item.valor == null ? 0 : item.valor}</SubTitle>
							<SubTitle textL bold color='whiteT' small>Data Inicio: {item.dataInicio.match(/[0-9]{4}[-][0-9]{2}[-][0-9]{2}/)}</SubTitle>
							<SubTitle textL bold color='whiteT' small>Data Fechamento: {item.dataFechamento.match(/[0-9]{4}[-][0-9]{2}[-][0-9]{2}/)}</SubTitle>
							<SubTitle textL bold color='whiteT' small>STATUS: {item.status}</SubTitle>
						</Container>
					</Container>
				</Container>
				<Spacer />

				<VerticalSeparator color='grayW' height='3px' width='auto' radius='15px' />
			</Button>

		</AddressItem>
	);

	return(
		<Container color='ground' padding={20} justify='flex-start' height={ScreenHeight} >
			
			<NameBackTop navigation={navigation} titleName='Pagamento e Lucro' destiny='Dashboard' />
			<Spacer />
			{contaFaturas.data?.faturasByContasId.length == 0 &&
				<SubTitle color='whiteT' bold active>Não possui nenhum ciclo</SubTitle>
			}

			{/* Aparecer quando não possuir notificações */}
			{contaFaturas.data?.faturasByContasId.length != 0 &&
				<ListConstru items={itensFaturas} ConstructIndex={ConstructIndex} />

			}
			
		</Container>
	);
};



export default PagamentoCiclos;