import React from "react";
import { View, Image, StyleSheet, TouchableOpacity, Text } from "react-native";
import { scale } from "../styles/scale";
import { withRouter } from "react-router-native";

interface Props {
	backButton: boolean;
	location: any;
	history: any;
	match: any;
}

const Header = ({ backButton, history }: Props) => {
	const backArrow = require("../graphics/back_arrow.png");
	return (
		<View style={style.container}>
			{backButton ? (
				<TouchableOpacity
					style={style.backButton}
					onPress={() => history.goBack()}
				>
					<Image source={backArrow} />
				</TouchableOpacity>
			) : null}
			<Text style={style.title}>Chess</Text>
		</View>
	);
};

export default withRouter<Props>(Header);

const style = StyleSheet.create({
	container: {
		alignSelf: "stretch",
		height: scale(80),
		backgroundColor: "grey",
		justifyContent: "center"
	},
	backButton: {
		marginLeft: scale(5),
		top: scale(32),
		position: "absolute"
	},
	title: {
		marginTop: scale(25),
		alignSelf: "center",
		fontSize: scale(20)
	}
});
