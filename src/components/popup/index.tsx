import React, { useCallback, useEffect, useState } from 'react';
import {
	View,
	StyleSheet,
	Button,
	Modal,
	Image,
	Text,
	TouchableOpacity,
	Animated,
} from 'react-native';
import Icon  from 'react-native-vector-icons/FontAwesome';

type data = {
	type:string
	msg:string
	visible?:boolean
	children?:string
}
const ModalPoup = ({visible, children}) => {
	const [showModal, setShowModal] = React.useState(visible);
	const scaleValue = React.useRef(new Animated.Value(0)).current;
	React.useEffect(() => {
		toggleModal();
	}, [visible]);
	const toggleModal = () => {
		if (visible) {
			setShowModal(true);
			Animated.spring(scaleValue, {
				toValue: 1,
				duration: 300,
				useNativeDriver: true,
			}).start();
		} else {
			setTimeout(() => setShowModal(false), 200);
			Animated.timing(scaleValue, {
				toValue: 0,
				duration: 300,
				useNativeDriver: true,
			}).start();
		}
	};
	return (

		<View style={styles.modalBackGround}>
			<Animated.View
				style={[styles.modalContainer, {transform: [{scale: scaleValue}]}]}>
				{children}
			</Animated.View>
		</View>
	
	);
};

export const SimplePopUp:React.FC<data> = ({type,msg}) => {
	

	return (

		<View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
		
			<ModalPoup visible={true}>
				<View style={{alignItems: 'center'}}>
					
				</View>
				<View style={{alignItems: 'center'}}>
					{type=='error' && <Icon name="remove" size={100} color="#ff0000" />}
					{type!='error' && <Icon name="check" size={100} color="#00FF00" />}

				</View>

				<Text style={{marginVertical: 30, fontSize: 20, textAlign: 'center'}}>
					{msg}
				</Text>
			</ModalPoup>
		</View>

	);
};

const styles = StyleSheet.create({
	modalBackGround: {
		flex: 1,
		backgroundColor: 'transparent',
		justifyContent: 'center',
		alignItems: 'center',
		width: '100%',
	},
	modalContainer: {
		width: '80%',
		backgroundColor: '#fcfcfcf0',
		paddingHorizontal: 20,
		paddingVertical: 30,
		borderRadius: 20,
		elevation: 20,
	},
	header: {
		width: '100%',
		height: 40,
		alignItems: 'flex-end',
		justifyContent: 'center',
	},
});

