import React from "react";
import {
	View,
	Text,
	TextInput,
	StyleSheet,
	TouchableWithoutFeedback,
	Keyboard
} from "react-native";
import Header from "../components/Header";
import { connect } from "react-redux";
import { AppState } from "../store";
import { changeUsername } from "../userReducer/actions";
import Button from "../components/Button";
import KeyboardDismiss from "../components/KeyboardDismiss";
import { scale } from "../styles/scale";

interface Props {
	dispatch: any;
	username: string;
}

const SettingsInput = ({ dispatch, username }: Props) => {
	const onChangeText = (e: string) => {
		dispatch(changeUsername(e));
	};
	return (
		<KeyboardDismiss>
			<View style={style.container}>
				<Header backButton={true} />
				<View style={style.inputRow}>
					<Text>User name: </Text>
					<TextInput
						style={style.textInput}
						onChangeText={onChangeText}
						value={username}
						autoCapitalize={"none"}
					/>
				</View>
				<View style={style.buttonsRow}>
					<Button text={"Create game"} linkTo={"/createGame"} />
					<Button text={"Join game"} linkTo={"/joinGame"} />
				</View>
			</View>
		</KeyboardDismiss>
	);
};

const mapStateToProps = (state: AppState) => ({
	username: state.user.username
});

const style = StyleSheet.create({
	container: {
		flex: 1
	},
	textInput: {
		height: scale(30),
		width: scale(100),
		borderColor: "gray",
		borderWidth: 1,
		borderRadius: 2,
		paddingHorizontal: scale(5)
	},
	inputRow: {
		marginTop: scale(30),
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-evenly"
	},
	buttonsRow: {
		marginTop: scale(40),
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-evenly"
	}
});

export default connect(mapStateToProps)(SettingsInput);
