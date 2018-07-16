import React from "react";
import { StyleSheet, Text, View, ActivityIndicator } from "react-native";
import { connect } from "react-redux";

import { scale } from "../styles/scale";
import { globalColors } from "../styles/colors";
import { State as LoadingState } from "../loadingReducer";
import { AppState } from "../store";

interface Props {
	readonly loading: LoadingState;
	readonly children: JSX.Element;
}

const Loading = ({ loading, children }: Props) => {
	const { loadings, disable } = loading;
	let showLoading = false;
	if (loadings) {
		for (const load in loadings) {
			if (loadings.hasOwnProperty(load)) {
				if (loadings[load] === true) {
					showLoading = true;
				}
			}
		}
	}

	return (
		<View style={style.container}>
			{showLoading &&
				!disable && (
					<View style={style.wrapper}>
						<ActivityIndicator
							size="large"
							color={globalColors.grey}
						/>
					</View>
				)}
			{children}
		</View>
	);
};

const style = StyleSheet.create({
	container: {
		flex: 1
	},
	wrapper: {
		position: "absolute",
		top: 0,
		left: 0,
		right: 0,
		bottom: 0,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: globalColors.black,
		opacity: 0.8,
		zIndex: 100
	},
	text: {
		marginTop: scale(4),
		color: globalColors.black
	}
});

const mapStateToProps = (state: AppState) => ({
	loading: state.loading
});

export default connect(mapStateToProps)(Loading);
