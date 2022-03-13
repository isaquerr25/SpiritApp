import React from 'react';

import { View, Text, SafeAreaView } from 'react-native';
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
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
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import { createStackNavigator } from '@react-navigation/stack';
import { enableScreens } from 'react-native-screens';
const screens  = {
	Home: {
		screen: Home
	},

};





enableScreens();

// const HomeStack = createStackNavigator(screens);
const Stack = createStackNavigator();

const AppNavigator = createSwitchNavigator({


	Home: Home,
	Register: Register,
	UpdateAccount: UpdateAccount,
	InviteFriend: InviteFriend,
	PagamentoCiclos: PagamentoCiclos,
	Dashboard: Dashboard,
	ConfigProfile: ConfigProfile,
	Login: Login,
	PanelBonus: PanelBonus,
	Profile: Profile,
	ConfirmCode: ConfirmCode,
	RestartPassword: RestartPassword,
	SendEmail: SendEmail,
	RecuperationPassword: RecuperationPassword,
	RegisterAccountForex: RegisterAccountForex,
	Notification: Notification
});

export default  createAppContainer(AppNavigator);
// export default () => {
// 	return(

// 		<NavigationContainer >
// 			<Stack.Navigator  >

// 				<Stack.Screen name="Home" component={Home} options={{title: 'Overview'}}/>
// 				<Stack.Screen name="Login" component={Login} />
// 				<Stack.Screen name="Register" component={Register} />
// 				<Stack.Screen name="SendEmail" component={SendEmail} />
// 				<Stack.Screen name="ConfirmCode" component={ConfirmCode} />
// 				<Stack.Screen name="RestartPassword" component={RestartPassword} />
// 				<Stack.Screen name="Dashboard" component={Dashboard} />
// 				<Stack.Screen name="UpdateAccount" component={UpdateAccount} />
// 				<Stack.Screen name="RegisterAccountForex" component={RegisterAccountForex} />
// 				<Stack.Screen name="Notification" component={Notification} />
// 				<Stack.Screen name="PagamentoCiclos" component={PagamentoCiclos} />
// 				<Stack.Screen name="ConfigProfile" component={ConfigProfile} />
// 				<Stack.Screen name="Profile" component={Profile} />
// 				<Stack.Screen name="RecuperationPassword" component={RecuperationPassword} />
// 				<Stack.Screen name="InviteFriend" component={InviteFriend} />
// 				<Stack.Screen name="PanelBonus" component={PanelBonus} />

// 			</Stack.Navigator>
// 		</NavigationContainer>

// 	);
// };
