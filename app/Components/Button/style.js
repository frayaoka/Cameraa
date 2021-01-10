import { StyleSheet } from "react-native";
import { Settings } from "../Typography";


var buttonWidth = 90;

export const ButtonSmallStyles = StyleSheet.create({
	buttonSmallContainer: {
	    flexDirection: "row",
	},
	buttonSmall: {
	    flexDirection: 'row',
	    alignItems: 'center',
	    justifyContent: "center",
        borderRadius: 1,
        borderWidth:2,
	    minWidth: buttonWidth,
	    height: 50,
	    padding: 13,
	    paddingTop: 10,
	    paddingBottom: 10,
	},

	buttonIcon: {
	    width: 14,
	    height: 14,
	    resizeMode: 'contain',
	},

	buttonTitle: {
    	fontSize: 14,
	}
});
