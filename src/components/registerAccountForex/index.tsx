import React, { useState } from 'react';
import { View, Image, StyleSheet, Dimensions } from 'react-native';

import {Container , Button, ButtonText, LogoImgae,Spacer ,ButtonIcon,ContainerMax, Input,SubTitle} from '../../styles';
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
			
			<NameBackTop  titleName='Registro De Nova Conta'/>
			
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
				conta: 0,
				investAberturaInit:0, 
				serverMetaTrader:'Testee@5', 
				attributesMeta:'Testee@5', 
				password:'Testee@5', 
				afiliadoId:1
			}}

			onSubmit={async (values, { setSubmitting }) => {
				setSubmitting(true);
				// console.log(values);

				const result = await setNewConta({variables: values});
				console.log(result);
				const errors = result.data?.inputNewContaMt.error;
				console.log('errordasdasdass',errors);
				console.log('errors',errors?.length ==0);
				if (errors?.length ==0){
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
							value={values.conta} 
							placeholder='NUMERO DA CONTA FOREX'
						/>
						<Input  
							onChangeText={handleChange('conta')}
							onBlur={handleBlur('conta')}
							value={values.conta} 
							placeholder='SENHA'
						/>
						<Input
							onChangeText={handleChange('conta')}
							onBlur={handleBlur('conta')}
							value={values.conta} 
							placeholder='SERVIDOR'
						/>
						<Input
							onChangeText={handleChange('conta')}
							onBlur={handleBlur('conta')}
							value={values.conta} 
							placeholder='VALOR EM CONTA'
						/>
						<Input
							onChangeText={handleChange('conta')}
							onBlur={handleBlur('conta')}
							value={values.conta} 
							placeholder='VALOR EM BONUS'
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