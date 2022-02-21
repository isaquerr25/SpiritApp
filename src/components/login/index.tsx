import React from 'react';
import { View, Image, StyleSheet, Dimensions } from 'react-native';

import {Container , Button, ButtonText, LogoImgae,Spacer , Input,SubTitle} from '../../styles';
import logo_spirit from '../../assets/logo_spirit.png';
import { useCreateAuthUserMutation, useLoginAuthUserMutation } from '../../generated/graphql';
import { Formik } from 'formik';

const Login = () => {
	const [qglLogin,login] = useLoginAuthUserMutation();
	const ScreenHeight = Dimensions.get('window').height;
      
	return(
		
		<Container color='ground' padding={30} justify='flex-start' height={ScreenHeight} >

			<Image
				style={LogoImgae.logo}
				source={logo_spirit}
				resizeMode="contain"
			/>
			<Formik
				initialValues={{ email: '',password:'' }}
				// onSubmit={values => qglLogin.(values)}

				onSubmit={async (values, { setSubmitting }) => {
					setSubmitting(true);
					console.log(values);

					const result = await qglLogin({variables: values});
					console.log(result);
					setSubmitting(false);
					const errors = result;
					// if (errors) {
					//   setErrorMessage(errors[0].message);
					//   setShowError.on();
					// } else {
					//   navigate('/', { replace: true });
					// }
				  }}
			>
				
				{({ handleChange, handleBlur, handleSubmit, values }) => (
					<><Container justify="space-between" height={150}>

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



export default Login;