

import {Container ,AddressItem , Button, ButtonText, ButtonIcon,VerticalSeparator, LogoImgae,Spacer , Input,SubTitle, ContainerMax} from '../../styles';
import Icon  from 'react-native-vector-icons/FontAwesome';

export const NameBackTop = ({titleName,navigation,destiny }) =>{
	return(
		<Container height={50}  row  >
			<ContainerMax position='absolute' align='flex-start'>
				<ButtonIcon  onPress={() =>{navigation.navigate(destiny);}} type='transparent' radius='15px'  >
					<Icon name="angle-left" size={30} color="#F4F4F4" />
				</ButtonIcon>
			</ContainerMax>
				
			<SubTitle color='whiteT' bold width='auto' active>{titleName}</SubTitle>
				
		</Container>
	);
};

export const ItemAccontNotification = () =>{
	return(
		<AddressItem type='transparent'>
			<Button marginD={0} type='transparent'>
				
				<Container height={60}  row justify='flex-start' >
					<ButtonIcon height={60} width={60} type='ground' >
						<Icon name="italic" size={40} color="#CB2E2E" />
					</ButtonIcon>
					<Container heightM={50} row>
						
						<Container  width={1000}>
							<SubTitle textL bold color='whiteT' small>Ação: Promoção</SubTitle>
							<SubTitle textL bold color='whiteT' small numberOfLines={1}>Msg: Pomoção XM está dando 100% de depósito</SubTitle>
						</Container>
					</Container>
				</Container>
				<Spacer />
				<VerticalSeparator color='grayW' height='3px' width='auto' radius='15px'/>
			</Button>
			
		</AddressItem>
	);
};


export const ServerForexCiclos = () =>{
	return(
		<AddressItem type='transparent'>
			<Button marginD={0} type='transparent'>
				
				<Container height={60}  row justify='flex-start' >
					<ButtonIcon height={60} width={60} type='ground' >
						<Icon name="flash" size={40} color="#FFF701" />
					</ButtonIcon>
					<Container heightM={50} row>
						
						<Container  width={1000}>
							<SubTitle textL bold color='whiteT' small>NAME: PRINCIPAL</SubTitle>
							<SubTitle textL bold color='whiteT' small>Ciclo: 156489754</SubTitle>
							<SubTitle textL bold color='whiteT' small>Status: Pago</SubTitle>
						</Container>
					</Container>
				</Container>
				<Spacer />
				<VerticalSeparator color='grayW' height='3px' width='auto' radius='15px'/>
			</Button>
			
		</AddressItem>
	);
};











