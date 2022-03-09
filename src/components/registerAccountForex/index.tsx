import React, { useState } from 'react';
import { View, Image, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';

import {Container , Button, ButtonText, LogoImgae,Spacer ,ButtonIcon,ContainerMax, Input,SubTitle, InputNumber, NewNumericInput} from '../../styles';
import Graph from '../../assets/graph.png';
import Icon  from 'react-native-vector-icons/FontAwesome';
import { NameBackTop } from '../utils';
import { Formik } from 'formik';
import { useInputNewContaMtMutation } from '../../generated/graphql';
import { SimplePopUp } from '../popup';

const RegisterAccountForex = ({navigation}) => {
	enum statePopup {
		disable,
		error,
		access
	}
	const [popup,setPopup] = useState<statePopup>(0);
	const [erroMsg,setErroMsg] = useState('');
	const [valuesInput, setValuesInput] = useState({
		conta: 0,
		password: '',
		serverMetaTrader: '',
		attributesMeta: '',
		investAberturaInit: 0,
		afiliadoId: 1
	});


	const [setNewConta,newConta] = useInputNewContaMtMutation();
	const ScreenHeight = Dimensions.get('window').height;

	return(
		<Container color='ground' padding={30} justify='space-between' height={ScreenHeight} >
			{popup == statePopup.error &&
				<TouchableOpacity style={styles.button} onPress={() => setPopup(statePopup.disable)}>

					<SimplePopUp type='error' msg={erroMsg} />
				</TouchableOpacity>
			}

			{popup == statePopup.access &&
				<TouchableOpacity style={styles.button} onPress={() => setPopup(statePopup.disable)}>
					<SimplePopUp type='accest' msg='Loading' />
				</TouchableOpacity>
			}
			
			<NameBackTop  titleName='Registro De Nova Conta' navigation={navigation} destiny='Dashboard'/>
			
			<Container borderCo='redAtencion' radius='15px' padding={10} height={120}  >
				<SubTitle color='redAtencion' small>
					Todas as informações sobre a conta forex são fornecidas 
					pela correntora e devem sem escritas de acordo como foram
					fornecidas. O valor da conta será a soma dos bonus com o valor
					real. Nome da conta poderá ser escolhido pelo usuário.
				</SubTitle>
			</Container>
			
			<Container row height={70}>
				<Image
					style={LogoImgae.logoGraph}
					source={Graph}
					resizeMode="contain"
				/>
				<Image
					style={LogoImgae.transformRotateImage}
					source={Graph}
					resizeMode="contain"
				/>
			</Container>

			<Formik initialValues={valuesInput}

				onSubmit={async (values, { setSubmitting }) => {
					setValuesInput(values);
					console.log('1');
					values.conta = Number(values.conta);
					values.investAberturaInit = Number(values.investAberturaInit);
					console.log(values);
					if (values.conta != 0 && values.investAberturaInit >= 1000 &&
						values.serverMetaTrader != '' && values.password != '') {

						const result = await setNewConta({ variables: values });
						console.log('3');
						console.log(result);
						const errors = result.data?.inputNewContaMt.error;
						console.log('errordasdasdass', errors);
						if (errors == 'success') {
							setPopup(statePopup.access);
							navigation.navigate('Dashboard');
							setSubmitting(true);
						}
						else if (errors == 'This account already exists') {

							setPopup(statePopup.error);
							setErroMsg(errors);

						}
						else {
							setPopup(statePopup.error);

							setErroMsg('Erro ao Criar a Conta. Verifique se os dados estão corretos ou contate o suporte');
							console.log('não logou');
						}
					}
					else {
						setPopup(statePopup.error);

						setErroMsg('Preencha os campos: ' +
							(values.conta != 0 ? '' : 'NUMERO DA CONTA FOREX,\n') +
							(values.password != '' ? '' : 'SENHA,\n') +
							(values.serverMetaTrader != '' ? '' : 'SERVIDOR,\n') +
							(values.investAberturaInit != 0 ? (values.investAberturaInit >= 1000 ? '' :
								'Investimento Min $1000 Dólares,\n') : 'VALOR EM CONTA,\n') +
							'');
						console.log('não logou');
					}
				}}
			>
				{({ handleChange, handleBlur, handleSubmit, values }) => (
					<>
						<Input

							onChangeText={handleChange('conta')}
							onBlur={handleBlur('conta')}
							keyboardType="numeric"
							value={(values.conta == 0 ? '' : values.conta.toString())}
							placeholder='NUMERO DA CONTA FOREX'
						/>
						<Input  
							onChangeText={handleChange('password')}
							onBlur={handleBlur('password')}
							value={values.password} 
							placeholder='SENHA'
						/>
						<Input
							onChangeText={handleChange('serverMetaTrader')}
							onBlur={handleBlur('serverMetaTrader')}
							value={values.serverMetaTrader} 
							placeholder='SERVIDOR'
						/>
						<Input
							onChangeText={handleChange('attributesMeta')}
							onBlur={handleBlur('attributesMeta')}
							value={values.attributesMeta} 
							placeholder='ATRIBUTO META TRADER'
						/>
						<Input
							onChangeText={handleChange('investAberturaInit')}
							onBlur={handleBlur('investAberturaInit')}
							value={(values.investAberturaInit == 0 ? '' : values.investAberturaInit.toString())}
							keyboardType="numeric"
							placeholder='VALOR EM CONTA'
						/>

						<Spacer height={1}/>
				
						<Button onPress={handleSubmit}  radius='15px' >
							<ButtonText>NOVA CONTA FOREX</ButtonText>
						</Button>
					</>
				)}
			</Formik>
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


export default RegisterAccountForex;