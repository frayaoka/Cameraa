import React from 'react';
import { Text } from 'react-native';
import { TextTypographyStyle } from './style';


var H1 = (props) => {
	return(
		<Text 
			allowFontScaling={false}
			style={[TextTypographyStyle.h1, props.textStyle]} 
			numberOfLines={props.numberOfLines}>
			{props.textTitle}
		</Text>
	);
}

var H2 = (props) => {
	return(
		<Text 
			allowFontScaling={false}
			style={[TextTypographyStyle.h2, props.textStyle ]} 
			numberOfLines={props.numberOfLines}>
			{props.textTitle}
		</Text>
	);
}


var TextPrimary = (props) => {
	return(
		<Text 
			allowFontScaling={false}
			style={[TextTypographyStyle.textPrimary, props.textStyle]} 
			numberOfLines={props.numberOfLines}>
			{props.textTitle}
		</Text>
	);
}

var TextSecondary = (props) => {
	return(
		<Text 
			allowFontScaling={false}
			style={[TextTypographyStyle.textSecondary, props.textStyle]} 
			numberOfLines={props.numberOfLines}>
			{props.textTitle}
		</Text>
	);
}

export {
	H1, H2,TextPrimary, TextSecondary
};