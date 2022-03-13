import React, { useState } from 'react';
import { View, Image, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';

import {Container , Button, Title, ButtonText, LogoImgae,Spacer , Input,SubTitle} from '../../styles';
import logo_spirit from '../../assets/logo_spirit.png';
import Icon  from 'react-native-vector-icons/FontAwesome';
import { NameBackTop } from '../utils';
import { Formik } from 'formik';
import { useUpdateAuthPasswordMutation } from '../../generated/graphql';
import { SimplePopUp } from '../popup';

const RecuperationPassword = ({ navigation }) => {
	enum statePopup {
		disable,
		error,
		access
	}
	const [popup, setPopup] = useState<statePopup>(0);
	const [erroMsg, setErroMsg] = useState('');

	const ScreenHeight = Dimensions.get('window').height;
	const [setChangePassword,] = useUpdateAuthPasswordMutation();
	const [packPass, setPackPass] = useState({

		oldPassword: '',
		newPassword: '',
		confirmPassword: ''
	});
	return(
		<Container color='ground' padding={30} justify='space-between' height={ScreenHeight} >
			<NameBackTop navigation={navigation} destiny='Profile' titleName='Alterar Password' />

			{popup == statePopup.error &&
				<TouchableOpacity style={styles.button} onPress={() => {
					navigation.navigate('Dashboard');
					setPopup(statePopup.disable);
				}}>

					<SimplePopUp type='error' msg={erroMsg} />
				</TouchableOpacity>
			}

			{popup == statePopup.access &&
				<TouchableOpacity style={styles.button} onPress={() => setPopup(statePopup.disable)}>
					<SimplePopUp type='accest' msg='Loading' />
				</TouchableOpacity>
			}


			<Formik initialValues={packPass}

				onSubmit={async (values, { setSubmitting }) => {
					setPackPass(values);
					console.log('1');
					if (values.oldPassword != '' &&
						values.newPassword != '' &&
						values.confirmPassword != '' &&
						values.confirmPassword == values.newPassword) {

						const result = await setChangePassword({
							variables: {
								oldPassword: values.oldPassword,
								newPassword: values.newPassword
							}
						});
						console.log('3');
						console.log(result);
						const errors = result.data?.updateAuthPassword;

						if (errors?.field == 'success') {
							setPopup(statePopup.access);
							setSubmitting(true);
						}
						else {
							setPopup(statePopup.error);
							setErroMsg(('Campo: ' + errors?.field + '\n Mensagem: ' + errors?.message));
							console.log('não logou');
						}
					}
					else {
						setPopup(statePopup.error);

						setErroMsg('Preencha os campos: ' +



							(values.oldPassword != '' ? '' : 'Email\n') +
							(values.newPassword != '' ? (values.confirmPassword != '' ? (
								values.confirmPassword != values.newPassword ? 'Senhas não são Identicas' : '') :
								'Confirm Password,\n') : 'Password,\n')
						);
						console.log('não logou');
					}
				}}
			>
				{({ handleChange, handleBlur, handleSubmit, values }) => (
					<>
						<Container justify="space-between" height={250}>
							<Container>
								<SubTitle bold textL color='whiteT'>Senha Antiga:</SubTitle>
								<Spacer height={5} />

								<Input
									secureTextEntry={true}
									onChangeText={handleChange('oldPassword')}
									onBlur={handleBlur('oldPassword')}
									value={values.oldPassword}
									placeholder='Senha Antiga'
								/>

							</Container>

							<Container>
								<SubTitle bold textL color='whiteT'>Nova Senha:</SubTitle>
								<Spacer height={5} />

								<Input
									secureTextEntry={true}
									onChangeText={handleChange('newPassword')}
									onBlur={handleBlur('newPassword')}
									value={values.newPassword}
									placeholder='Nova Senha'
								/>



							</Container>


							<Input
								secureTextEntry={true}
								onChangeText={handleChange('confirmPassword')}
								onBlur={handleBlur('confirmPassword')}
								value={values.confirmPassword}
								placeholder='Confirmar Senha'
							/>

						</Container>
						<Spacer height={40} />
						<Button onPress={handleSubmit} marginD={15} radius='15px'>
							<ButtonText>Alterar a Senha</ButtonText>
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


export default RecuperationPassword;