import React from "react";
import { withRouter } from "react-router-native";
import { TouchableOpacity, Text, StyleSheet, View } from "react-native";
import { scale } from "../styles/scale";

interface Props {
	onPress: () => void;
	text: string;
	history: any;
	location: any;
	match: any;
}

const Button = ({ onPress, text, history }: Props) => {
	return (
		<TouchableOpacity style={style.blueButton} onPress={onPress}>
			<Text>{text}</Text>
		</TouchableOpacity>
	);
};

const style = StyleSheet.create({
	blueButton: {
		width: scale(100),
		height: scale(40),
		backgroundColor: "#D3D3D3",
		alignItems: "center",
		justifyContent: "center",
		borderRadius: 10
	}
});

export default withRouter<Props>(Button);
