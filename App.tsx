import { StatusBar } from 'expo-status-bar';
import { ScrollView ,View, Text, Dimensions } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import React from 'react';
import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Home from './src/components/home';
import Login from './src/components/login';
import Register from './src/components/register';
import SendEmail from './src/components/recuperationAccount/sendEmail';
import ConfirmCode from './src/components/recuperationAccount/confirmCode';
import RestartPassword from './src/components/recuperationAccount/restartPassword';
import Dashboard from './src/components/dashboard';
import UpdateAccount from './src/components/updateAccount';
import RegisterAccountForex from './src/components/registerAccountForex';
import Notification from './src/components/notification';
import PagamentoCiclos from './src/components/pagamentoCiclos';
import ConfigProfile from './src/components/configProfile';
import Profile from './src/components/profile';
import RecuperationPassword from './src/components/recuperationPassword';
import InviteFriend from './src/components/inviteFriend';
import PanelBonus from './src/components/panelBonus';


// import Navigation from './navigation';


export default function App() {
	
	return (
		

		
		<ScrollView>
			<PanelBonus />
		</ScrollView>
		
		
	);

}
