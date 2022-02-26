import React, { useState } from 'react';
import { View, Image, StyleSheet, Dimensions } from 'react-native';

import {Container , Button, ButtonText, LogoImgae,Spacer ,ButtonIcon,ContainerMax, Input,SubTitle, InputNumber, NewNumericInput} from '../../styles';
import Graph from '../../assets/graph.png';
import Icon  from 'react-native-vector-icons/FontAwesome';
import { NameBackTop } from '../utils';
import { Formik } from 'formik';
import { useInputNewContaMtMutation } from '../../generated/graphql';

const RegisterAccountForex = ({navigation}) => {
	enum statePopup {
		disable,
		error,
		access
	}
	const [popup,setPopup] = useState<statePopup>(0);
	const [erroMsg,setErroMsg] = useState('');


	const [setNewConta,newConta] = useInputNewContaMtMutation();
	const ScreenHeight = Dimensions.get('window').height;

	return(
		<Container color='ground' padding={30} justify='space-between' height={ScreenHeight} >
			
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

			<Formik	initialValues={{ 
				conta: 8489456,
				password:'ADASDASD@5', 
				serverMetaTrader:'Testee@5', 
				attributesMeta:'Testee@5', 
				investAberturaInit:15000, 
				afiliadoId:1
			}}

			onSubmit={async (values, { setSubmitting }) => {
				console.log('1');
				values.conta = Number(values.conta);
				values.investAberturaInit = Number(values.investAberturaInit);
				console.log(values);
				setSubmitting(true);
				console.log('2');
				
				
				
				const result = await setNewConta({variables: values});
				console.log('3');
				console.log(result);
				const errors = result.data?.inputNewContaMt.error;
				console.log('errordasdasdass',errors);
				console.log('errors',errors?.length ==0);
				if (errors =='sucess'){
					navigation.navigate('Dashboard');
					setPopup(statePopup.access);
				}
				else{
					setPopup(statePopup.error);
					
					setErroMsg('Erro ao Criar a Conta. Verifique se os dados estão corretos ou contate o suporte');
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
							value={values.conta}
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
							value={values.investAberturaInit} 
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



export default RegisterAccountForex;