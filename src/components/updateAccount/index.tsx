import React, { useEffect, useState } from 'react';
import { View, Image, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';

import { Container, Button, ButtonText, LogoImgae, Spacer, Input, SubTitle, Title } from '../../styles';
import Graph from '../../assets/graph.png';
import Icon  from 'react-native-vector-icons/FontAwesome';
import { NameBackTop } from '../utils';
import { Formik } from 'formik';
import { SimplePopUp } from '../popup';
import { useUpdateContasMtMutation } from '../../generated/graphql';

const UpdateAccount = ({ navigation }) => {

	enum statePopup {
		disable,
		error,
		access
	}
	const [popup, setPopup] = useState<statePopup>(0);
	const [erroMsg, setErroMsg] = useState('');
	const [setUpdateContas,] = useUpdateContasMtMutation();

	const [valuesInput, setValuesInput] = useState(navigation.state.params.item);


	useEffect(() => {
		console.log(navigation.state.params.item);
	}, []);


	const validator = async(values) => {

		if (values.work == 'work') {
			values.work = 'notwork';
		} else if (values.work == 'notwork') {
			values.work = 'work';
		} else {

			return null;
		}

		if (values.conta != 0 && values.investAberturaInit >= 1000 &&
			values.serverMetaTrader != '' && values.password != '') {
			const result = await setUpdateContas({ variables: values });
			const errors = result.data?.updateContasMt;
			if (errors?.length == 0) {
				setPopup(statePopup.access);
				return 'success';
			}
			else {
				setPopup(statePopup.error);
				setErroMsg('Erro ao Atualizar, Contate o Suporte');
				return 'error';
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
		}
	};

	const sendPlay = (values) => {
		async function onlyWorkAsync() {

			const newValeus = { ...values };
			console.log('entrsssso ', newValeus);
			if (newValeus.work == 'waitpay') {
				setPopup(statePopup.error);
				setErroMsg('Page a Fatura para continuar e caso ja tenha para aguarde ou procure o suporte');
			}
			else {
				if (newValeus.work == 'work') {
					newValeus.work = 'notwork';
				} else {
					newValeus.work = 'work';
				}

				console.log('entro ', typeof (newValeus));
				const result = await setUpdateContas({ variables: newValeus });
				const errors = result.data?.updateContasMt;

				console.log('errors ', errors);

				if (errors?.length == 0) {
					setValuesInput(newValeus);
					setPopup(statePopup.access);
				}
				else {
					setPopup(statePopup.error);
					setErroMsg(errors[0].message);
				}
			}
		}
		onlyWorkAsync();

	};

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
					<SimplePopUp type='accest' msg='Success' />
				</TouchableOpacity>
			}
			<NameBackTop titleName='Atualizar Conta' navigation={navigation} destiny='Dashboard' />

			<Container borderCo='redAtencion' radius='15px' padding={20} height={140}  >
				<SubTitle color='redAtencion' small>
					Todas as informações sobre a conta forex são fornecidas
					pela correntora e devem ser escritas de acordo como foram
					fornecidas. O valor da conta será apenas o dinheiro em dolares.
				</SubTitle>
			</Container>

			<Container row height={90}>
				<Button onPress={() => { sendPlay(valuesInput); }} type='transparent' width='30%' marginD={0} padding radius='10px' align='center'>
					{valuesInput.work == 'waitpay' && <Icon name="ban" size={70} color="#FFFFFF" />}
					{valuesInput.work == 'work' && <Icon name="pause" size={70} color="#FFFFFF" />}
					{valuesInput.work == 'notwork' && <Icon name="play" size={70} color="#FFFFFF" />}
				</Button>
				<Container  height={60} justify='space-between'>
					<SubTitle color='whiteT' textL bold>CONTA: {valuesInput.conta} </SubTitle>
					<SubTitle color='whiteT' textL bold>Status: {valuesInput.work}</SubTitle>
				</Container>

				<Image
					style={LogoImgae.logoGraph}
					source={Graph}
					resizeMode="contain"
				/>
			</Container>



			<Formik initialValues={valuesInput}
				onSubmit={async (values, { setSubmitting }) => {

					values.conta = Number(values.conta);
					values.investAberturaInit = Number(values.investAberturaInit);
					if (values.conta != 0 && values.investAberturaInit >= 1000 &&
						values.serverMetaTrader != '' && values.password != '') {
						const result = await setUpdateContas({ variables: values });
						setValuesInput(values);
						const errors = result.data?.updateContasMt;
						if (errors?.length == 0) {
							setPopup(statePopup.access);
							setSubmitting(true);
						}
						else {
							setPopup(statePopup.error);
							setErroMsg('Erro ao Criar a Conta. Verifique se os dados estão corretos ou contate o suporte');
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
					}
				}}
			>
				{({ handleChange, handleBlur, handleSubmit, values }) => (
					<>

						<Input
							secureTextEntry={true}
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
						<Spacer height={1} />

						<Button onPress={handleSubmit} radius='15px' >
							<ButtonText>Atualizar</ButtonText>
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

export default UpdateAccount;