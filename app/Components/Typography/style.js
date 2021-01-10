import { StyleSheet } from "react-native";
import { Settings } from "./Settings";


const text = {
	color: Settings.colorBlack,
	includeFontPadding: false,
	textAlignVertical: 'center',
};

export const TextTypographyStyle = StyleSheet.create({
    h1: {
		...text,
    	fontSize: 50,
    	lineHeight: 76,
    },
    h2: {
		...text,
    	fontSize: 30,
    	lineHeight: 35,
    },
    textPrimary: {
		...text,
    	fontSize: 16,
    	lineHeight: 20,
    },
    textSecondary: {
		...text,
    	fontSize: 14,
    	lineHeight: 18,
    },
});
