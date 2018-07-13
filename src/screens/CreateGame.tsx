import React from "react";
import {
	TextInput,
	View,
	NativeSyntheticEvent,
	TextInputChangeEventData,
	StyleSheet,
	Switch,
	Text,
	TouchableOpacity,
	TouchableWithoutFeedback,
	Keyboard
} from "react-native";
import { AppState } from "../store";
import { Color } from "../gameReducer";
import { connect } from "react-redux";
import { changeGameName, changeColorSwitch } from "../gameReducer/actions";
import Header from "../components/Header";
import { scale } from "../styles/scale";
import { globalColors } from "../styles/colors";
import KeyboardDismiss from "../components/KeyboardDismiss";

interface Props {
	gameName: string;
	switchColor: Color;
	dispatch: any;
}

const CreateGame = ({ gameName, switchColor, dispatch }: Props) => {
	const onTextChange = (
		e: NativeSyntheticEvent<TextInputChangeEventData>
	) => {
		dispatch(changeGameName(e.nativeEvent.text));
	};

	const whitePress = () => {
		dispatch(changeColorSwitch(Color.white));
	};

	const blackPress = () => {
		dispatch(changeColorSwitch(Color.black));
	};

	const blackTextColor =
		switchColor === Color.black
			? { color: globalColors.white }
			: { color: globalColors.black };
	const whiteTextColor =
		switchColor === Color.white
			? { color: globalColors.white }
			: { color: globalColors.black };

	const blackBackgroundColor =
		switchColor === Color.black
			? { backgroundColor: globalColors.black }
			: { backgroundColor: globalColors.grey };

	const whiteBackgroundColor =
		switchColor === Color.white
			? { backgroundColor: globalColors.black }
			: { backgroundColor: globalColors.grey };

	return (
		<KeyboardDismiss>
			<View style={style.container}>
				<Header backButton={true} />
				<View style={style.row}>
					<Text>Game Name:</Text>
					<TextInput
						style={style.textInput}
						onChange={onTextChange}
						value={gameName}
						autoCapitalize={"none"}
					/>
				</View>
				<View style={style.rowChoose}>
					<Text>Choose your color:</Text>
					<TouchableOpacity onPress={blackPress}>
						<View
							style={[style.chooseBorder, blackBackgroundColor]}
						>
							<Text style={[blackTextColor]}>Black</Text>
						</View>
					</TouchableOpacity>
					<TouchableOpacity onPress={whitePress}>
						<View
							style={[style.chooseBorder, whiteBackgroundColor]}
						>
							<Text style={[whiteTextColor]}>White</Text>
						</View>
					</TouchableOpacity>
				</View>
			</View>
		</KeyboardDismiss>
	);
};

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
	row: {
		marginTop: scale(60),
		flexDirection: "row",
		justifyContent: "space-evenly",
		alignItems: "center"
	},
	rowChoose: {
		marginTop: scale(20),
		flexDirection: "row",
		justifyContent: "space-evenly",
		alignItems: "center"
	},
	chooseBorder: {
		padding: scale(5),
		borderColor: globalColors.black,
		borderRadius: 20,
		borderWidth: 1
	}
});

const mapStateToProps = (state: AppState) => ({
	gameName: state.game.gameName,
	switchColor: state.game.adminColor
});

export default connect(mapStateToProps)(CreateGame);
