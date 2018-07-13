import React from "react";
import { StyleSheet, TouchableWithoutFeedback, Keyboard } from "react-native";

interface Props {
	children: JSX.Element;
}

const KeyboardDismiss = ({ children }: Props) => {
	return (
		<TouchableWithoutFeedback
			style={style.container}
			onPress={Keyboard.dismiss}
			accessible={false}
		>
			{children}
		</TouchableWithoutFeedback>
	);
};

const style = StyleSheet.create({
	container: {
		flex: 1
	}
});

export default KeyboardDismiss;
