import * as React from 'react';

import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { resolveUri } from 'expo-asset/build/AssetSources';


import ConfigProfile from '../src/components/configProfile';
import Dashboard from '../src/components/dashboard';
import Home from '../src/components/home';
import InviteFriend from '../src/components/inviteFriend';
import Login from '../src/components/login';
import PagamentoCiclos from '../src/components/pagamentoCiclos';
import PanelBonus from '../src/components/panelBonus';
import Profile from '../src/components/profile';
import ConfirmCode from '../src/components/recuperationAccount/confirmCode';
import RestartPassword from '../src/components/recuperationAccount/restartPassword';
import SendEmail from '../src/components/recuperationAccount/sendEmail';
import RecuperationPassword from '../src/components/recuperationPassword';
import Register from '../src/components/register';
import RegisterAccountForex from '../src/components/registerAccountForex';
import UpdateAccount from '../src/components/updateAccount';
import Notification from '../src/components/notification';










const Stack = createNativeStackNavigator();


export default () => {
	return(
		<NavigationContainer>
			<Stack.Navigator>
                
				<Stack.Screen name="Home" component={Home} />
				<Stack.Screen name="Login" component={Login} />
				<Stack.Screen name="Register" component={Register} />
				<Stack.Screen name="SendEmail" component={SendEmail} />
				<Stack.Screen name="ConfirmCode" component={ConfirmCode} />
				<Stack.Screen name="RestartPassword" component={RestartPassword} />
				<Stack.Screen name="Dashboard" component={Dashboard} />
				<Stack.Screen name="UpdateAccount" component={UpdateAccount} />
				<Stack.Screen name="RegisterAccountForex" component={RegisterAccountForex} />
				<Stack.Screen name="Notification" component={Notification} />
				<Stack.Screen name="PagamentoCiclos" component={PagamentoCiclos} />
				<Stack.Screen name="ConfigProfile" component={ConfigProfile} />
				<Stack.Screen name="Profile" component={Profile} />
				<Stack.Screen name="RecuperationPassword" component={RecuperationPassword} />
				<Stack.Screen name="InviteFriend" component={InviteFriend} />
				<Stack.Screen name="PanelBonus" component={PanelBonus} />

			</Stack.Navigator>
		</NavigationContainer>
	);
};