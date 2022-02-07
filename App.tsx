import { StatusBar } from 'expo-status-bar';
import { ScrollView ,View, Text, Dimensions } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import React from 'react';
import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Home from './src/components/home';
import Login from './src/components/login';
import Register from './src/components/register';

// import Navigation from './navigation';


export default function App() {
	
	return (
		

		
		<ScrollView>
			<Register />
		</ScrollView>
		
		
	);

}
