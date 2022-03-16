import { StatusBar } from 'expo-status-bar';
import { ScrollView ,View, Text, Dimensions, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import React from 'react';
import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';

import 'react-native-gesture-handler';
import { ApolloClient, ApolloProvider, createHttpLink, InMemoryCache } from '@apollo/client';
import Navigation from './navigation';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { TextInput } from 'react-native';

// import Navigation from './navigation';
const link = createHttpLink({
	// uri: 'http://localhost:4000/graphql',
	uri: 'http://192.168.1.66:4000/graphql',
	credentials: 'include'
});

export const client = new ApolloClient({
	// uri: 'http://192.168.1.255:4000/graphql' ,
	// uri: 'http://localhost:4000/graphql',
	cache : new InMemoryCache(),
	link
});

export default function App() {

	return (
	// <View>
	// 	<Text>asdasdasd</Text>

	// </View>
	

	
		<View style={{ flex: 1 }}>
			<ApolloProvider client={client} > 
				<ScrollView>
				
				
					
					<Navigation/>

				</ScrollView>
			</ApolloProvider>
		</View>
		
	);

}
