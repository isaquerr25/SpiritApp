import React, { useCallback, useEffect, useState } from 'react';
import {
	View,
	StyleSheet,
	Modal,
	Image,
	Text,
	TouchableOpacity,
	Animated,
} from 'react-native';
import Icon  from 'react-native-vector-icons/FontAwesome';
import { ButtonText, Button, VerticalSeparator, Spacer, SubTitle, Title, Container } from '../../styles';

type data = {
	type:string
	msg:string

}

const ModalPoup = ({visible, children}) => {
	const [showModal, setShowModal] = React.useState(visible);
	const scaleValue = React.useRef(new Animated.Value(0)).current;
	React.useEffect(() => {
		toggleModal();
	}, [visible]);
	const toggleModal = () => {
		if (visible) {
			setShowModal(true);
			Animated.spring(scaleValue, {
				toValue: 1,
				duration: 300,
				useNativeDriver: true,
			}).start();
		} else {
			setTimeout(() => setShowModal(false), 200);
			Animated.timing(scaleValue, {
				toValue: 0,
				duration: 300,
				useNativeDriver: true,
			}).start();
		}
	};
	return (

		<View style={styles.modalBackGround}>
			<Animated.View
				style={[styles.modalContainer, {transform: [{scale: scaleValue}]}]}>
				{children}
			</Animated.View>
		</View>
	
	);
};

const Modalcolar = ({ visible, children }) => {
	const [showModal, setShowModal] = React.useState(visible);
	const scaleValue = React.useRef(new Animated.Value(0)).current;
	React.useEffect(() => {
		toggleModal();
	}, [visible]);
	const toggleModal = () => {
		if (visible) {
			setShowModal(true);
			Animated.spring(scaleValue, {
				toValue: 1,
				duration: 300,
				useNativeDriver: true,
			}).start();
		} else {
			setTimeout(() => setShowModal(false), 200);
			Animated.timing(scaleValue, {
				toValue: 0,
				duration: 300,
				useNativeDriver: true,
			}).start();
		}
	};
	return (

		<View style={styles.modalBackGround}>
			<Animated.View
				style={[styles.BackGr, { transform: [{ scale: scaleValue }] }]}>
				{children}
			</Animated.View>
		</View>

	);
};

export const SimplePopUp:React.FC<data> = ({type,msg}) => {
	

	return (

		<View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
		
			<ModalPoup visible={true}>
				<View style={{alignItems: 'center'}}>
					
				</View>
				<View style={{alignItems: 'center'}}>
					{type=='error' && <Icon name="remove" size={100} color="#ff0000" />}
					{type!='error' && <Icon name="check" size={100} color="#00FF00" />}

				</View>

				<Text style={{marginVertical: 30, fontSize: 20, textAlign: 'center'}}>
					{msg}
				</Text>
			</ModalPoup>
		</View>

	);
};

export const ContaPopup = ({ item, navigation, action }) => {

	useEffect(() => { console.log('asdasdasdasdsd', item); }, []);
	return (

		<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', width: '80%' }}>

			<Modalcolar visible={true}>


				<Title>Conta Forex</Title>
				<Spacer height={20} />

				<SubTitle color='whiteT' bold >Número Da Conta :{item.conta.toString()}</SubTitle>
				<Spacer height={20} />

				<SubTitle color='whiteT' bold >Investido :{item.investAberturaInit.toString()}</SubTitle>
				<Spacer height={20} />

				<SubTitle color='whiteT' bold >STATUS :{item.work}</SubTitle>
				<Spacer height={20} />
				<VerticalSeparator color='grayW' height='3px' width='80%' radius='15px' />
				<Spacer height={20} />
				<Button onPress={() => { navigation.navigate('PagamentoCiclos', { item: item }); }} type='transparent' borderCo='primary' radius='15px'>
					<ButtonText color='whiteT'>Ciclo</ButtonText>
				</Button>
				<Button marginD={15} radius='15px' onPress={() => { navigation.navigate('UpdateAccount', { item: item }); }} >
					<ButtonText>Atualizar</ButtonText>
				</Button>
				<Button type='transparent' onPress={() => { action(1); }} borderCo='redAtencion' radius='15px' >
					<ButtonText color='whiteT'>Excluir</ButtonText>
				</Button>
			</Modalcolar>
		</View>

	);
};
export const DeleteContaPopup = ({ item, action, changeId }) => {


	return (

		<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', width: '80%' }}>

			<Modalcolar visible={true}>


				<Title type='redAtencion' Fsize={25}>Deletar</Title>
				<Spacer height={20} />

				<SubTitle color='whiteT' bold >Número Da Conta :{item.conta.toString()}</SubTitle>
				<Spacer height={20} />

				<SubTitle color='whiteT' bold >Investido :{item.investAberturaInit.toString()}</SubTitle>
				<Spacer height={20} />

				<SubTitle color='whiteT' bold >STATUS :{item.work}</SubTitle>
				<Spacer height={20} />
				<SubTitle color='whiteT' bold >Após o fechamente da conta referente. Todas as ordens em progresso ficaram sobre sua jurisdição.</SubTitle>


				<Spacer height={20} />


				<Button type='transparent' onPress={() => { changeId(item.id); action(0); }} borderCo='redAtencion' radius='15px'>
					<ButtonText color='whiteT'>Excluir</ButtonText>
				</Button>
				<Button marginD={15} onPress={() => { action(0); }} radius='15px'>
					<ButtonText>Sair</ButtonText>
				</Button>

			</Modalcolar>
		</View>

	);
};
const styles = StyleSheet.create({
	modalBackGround: {
		flex: 1,
		backgroundColor: 'transparent',
		justifyContent: 'center',
		alignItems: 'center',
		width: '100%',
	},
	modalContainer: {
		width: '80%',
		backgroundColor: '#fcfcfcf0',
		paddingHorizontal: 20,
		paddingVertical: 30,
		borderRadius: 20,
		elevation: 20,
	},
	BackGr: {
		width: '100%',
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#121212',
		paddingHorizontal: 20,
		paddingVertical: 30,
		borderRadius: 20,
		elevation: 20,
	},
	header: {
		width: '100%',
		height: 40,
		alignItems: 'flex-end',
		justifyContent: 'center',
	},
});
