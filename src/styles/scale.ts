import { Dimensions } from "react-native";

export const { width: deviceWidth, height: deviceHeight } = Dimensions.get(
	"window"
);

// standard screen size in dp of an iPhone 6, 7, or 8 is 375 x 667
// width from design is 360 dp
const standardWidth = 360;

export const scale = (num: number) => {
	// scale only if device screen is smaller than standard screen.
	return deviceWidth < standardWidth
		? num * (deviceWidth / standardWidth)
		: num;
};
