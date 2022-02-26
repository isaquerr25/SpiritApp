import React, { useState } from 'react';

import { View, Image, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';

import {Container , Button, ButtonText, LogoImgae,Spacer , Input,SubTitle} from '../../styles';
import logo_spirit from '../../assets/logo_spirit.png';
import { useCreateAuthUserMutation, useLoginAuthUserMutation } from '../../generated/graphql';
import { Formik } from 'formik';
import { SimplePopUp } from '../popup';
import 'react-native-gesture-handler';



const Login = ({navigation}) => {
	enum statePopup {
		disable,
		error,
		access
	}
	const [popup,setPopup] = useState<statePopup>(0);
	const [erroMsg,setErroMsg] = useState('');

	const [qglLogin,login] = useLoginAuthUserMutation();
	
	const ScreenHeight = Dimensions.get('window').height;
	
	return(
		
		<Container color='ground' padding={30} justify='flex-start' height={ScreenHeight} >

			{popup==statePopup.error &&
					<TouchableOpacity style={styles.button} onPress={() => setPopup(statePopup.disable)}>
						
						<SimplePopUp type ='error' msg={erroMsg}/>
					</TouchableOpacity>
			}

			{popup==statePopup.access &&
					<TouchableOpacity onPress={() => setPopup(statePopup.disable)}>
						<SimplePopUp type ='accest' msg='Loading'/>
					</TouchableOpacity>
			}
			
			<Image
				style={LogoImgae.logo}
				source={logo_spirit}
				resizeMode="contain"
			/>
			<Formik
				initialValues={{ email: 'Test@test.cs',password:'Testee@5' }}
				// onSubmit={values => qglLogin(values)}

				onSubmit={async (values, { setSubmitting }) => {
					setSubmitting(true);
					// console.log(values);

					const result = await qglLogin({variables: values});
					console.log(result);
					const errors = result.data?.LoginAuthUser.errors;
					console.log('errordasdasdass',errors);
					console.log('errors',errors?.length ==0);
					if (errors?.length ==0){
						navigation.navigate('Dashboard');
						setPopup(statePopup.access);
					}
					else{
						setPopup(statePopup.error);
						setErroMsg(errors[0].message);
						console.log('não logou');
					}
					
					// setSubmitting(false);
					// if (errors) {
					//   setErrorMessage(errors[0].message);
					//   setShowError.on();
					// } else {
					//   navigate('/', { replace: true });
					// }
				}}
			>
				
				{({ handleChange, handleBlur, handleSubmit, values }) => (
					<>
						<Container justify="space-between" height={150}>

							<Input
								onChangeText={handleChange('email')}
								onBlur={handleBlur('email')}
								value={values.email}
								placeholder='Email' />


							<Input
								onChangeText={handleChange('password')}
								onBlur={handleBlur('password')}
								value={values.password}
								placeholder='Password' />

							<SubTitle textL>Esqueci minha senha.</SubTitle>

						</Container>

						<Spacer height={40} />

						<Button onPress={handleSubmit} radius='15px' marginD={15}>
							<ButtonText>Login</ButtonText>
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
		top : 0, left : 0, right : 0,bottom : 0,
		zIndex:9999999,
		position:'absolute'
	},
	countContainer: {
		alignItems: 'center',
		padding: 10
	}
});

export default Login;