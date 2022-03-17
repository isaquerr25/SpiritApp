import React, { useState } from 'react';
import { View, Image, StyleSheet, Dimensions, TouchableOpacity, ScrollView } from 'react-native';

import {Container , Button, ButtonText, LogoImgae,Spacer , Input,SubTitle} from '../../styles';
import logo_spirit from '../../assets/logo_spirit.png';
import { NameBackTop } from '../utils';
import { Formik } from 'formik';
import { useCreateAuthUserMutation } from '../../generated/graphql';
import { SimplePopUp } from '../popup';
const Register = ({ navigation }) => {

	enum statePopup {
		disable,
		error,
		access
	}
	const [setNewConta, newConta] = useCreateAuthUserMutation();
	const [popup, setPopup] = useState<statePopup>(0);
	const [erroMsg, setErroMsg] = useState('');
	const [valuesInput, setValuesInput] = useState({
		email: '',
		firstName: '',
		lastName: '',
		dateJoined: String(new Date()),
		username: '',
		password: '',
		confirmPassword: ''
	});

	const ScreenHeight = Dimensions.get('window').height;

	return(
		<ScrollView>
			<Container color='ground' padding={30} justify='space-between' height={ScreenHeight} >
				{popup == statePopup.error &&
				<TouchableOpacity style={styles.button} onPress={() => setPopup(statePopup.disable)}>

					<SimplePopUp type='error' msg={erroMsg} />
				</TouchableOpacity>
				}

				{popup == statePopup.access &&
				<TouchableOpacity style={styles.button} onPress={() => { setPopup(statePopup.disable); navigation.navigate('Home'); }}>
					<SimplePopUp type='accest' msg='Create Success' />
				</TouchableOpacity>
				}

				<NameBackTop titleName='Home' navigation={navigation} destiny='Home' />
			
				<Image
					style={LogoImgae.logoHalf}
					source={logo_spirit}
					resizeMode="contain"
				/>
			
				<Formik initialValues={valuesInput}

					onSubmit={async (values, { setSubmitting }) => {
						values.username = values.email;
						setValuesInput(values);
						console.log('1');
						console.log(values.email != '');
						console.log(values.password != '');
						console.log(values.confirmPassword != '');
						console.log(values.confirmPassword == values.password);
						console.log(values.firstName != '');
						console.log(values.lastName != '');
						if (values.email != '' &&
						values.password != '' &&
						values.confirmPassword != '' &&
						values.confirmPassword == values.password &&
						values.firstName != '' &&
						values.lastName != '') {

							const result = await setNewConta({ variables: values });
							console.log('3');
							console.log(result);
							const errors = result.data?.createAuthUser.errors;
							console.log('errordasdasdass', errors);
							console.log('errors', errors?.length == 0);

							if (errors?.length == 0) {
								setPopup(statePopup.access);
								setSubmitting(true);
							}
							else {
								setPopup(statePopup.error);
								if (errors.length > 0) {
									setErroMsg(('Campo: ' + errors[0].field + '\n Mensagem: ' + errors[0].message));

								} else {

									setErroMsg('Erro ao Criar a Conta. Verifique se os dados estão corretos ou contate o suporte');
								}
								console.log('não logou');
							}
						}
						else {
							setPopup(statePopup.error);

							setErroMsg('Preencha os campos: ' +



							(values.email != '' ? '' : 'Email\n') +
							(values.password != '' ? (values.confirmPassword != '' ? (
								values.confirmPassword != values.password ? 'Senhas não são Identicas' : '') :
								'Confirm Password,\n') : 'Password,\n') +


							(values.firstName != '' ? '' : 'Nome,\n') +
							(values.lastName != '' ? '' : 'Sobrenome,\n') +
							'');
							console.log('não logou');
						}
					}}
				>
					{({ handleChange, handleBlur, handleSubmit, values }) => (
						<>
							<Input
								onChangeText={handleChange('firstName')}
								onBlur={handleBlur('firstName')}
								value={values.firstName}
								placeholder='Nome'
							/>
							<Input
								onChangeText={handleChange('lastName')}
								onBlur={handleBlur('lastName')}
								value={values.lastName}
								placeholder='Sobrenome'
							/>
							<Input
								onChangeText={handleChange('email')}
								onBlur={handleBlur('email')}
								value={(values.email == '' ? '' : values.email.toString())}
								placeholder='Email'
							/>
							<Input
								onChangeText={handleChange('password')}
								onBlur={handleBlur('password')}
								value={values.password}
								placeholder='Password'
							/>
							<Input
								onChangeText={handleChange('confirmPassword')}
								onBlur={handleBlur('confirmPassword')}
								value={values.confirmPassword}
								placeholder='Confirm Password'
							/>

							<Button onPress={handleSubmit} type='transparent' borderCo='primary' radius='15px' >
								<ButtonText color='whiteT'>Register</ButtonText>
							</Button>
						</>
					)}
				</Formik>
			</Container>
		</ScrollView>
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

export default Register;