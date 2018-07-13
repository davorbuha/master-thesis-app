import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import Button from "../components/Button";
import Header from "../components/Header";
import { scale } from "../styles/scale";

const IntroScreen = () => {
	return (
		<View style={style.container}>
			<Header backButton={false} />
			<View style={style.body}>
				<View style={style.title}>
					<Text>Chess Application</Text>
				</View>
				<View style={style.buttonPosition}>
					<Button text={"Next"} linkTo={"/settingsInput"} />
				</View>
			</View>
		</View>
	);
};

const style = StyleSheet.create({
	container: {
		flex: 1
	},
	title: {
		alignItems: "center",
		marginBottom: scale(30)
	},
	buttonPosition: {
		alignItems: "center"
	},
	body: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center"
	}
});

export default IntroScreen;
