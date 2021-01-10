import React ,{ Component , useState} from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Image, Dimensions } from 'react-native';
import {Settings} from '../Typography';
import { ButtonSmallStyles } from './style';


const ButtonSmall = (props) => {
	    return (
            <View style={[ButtonSmallStyles.buttonSmallContainer, props.buttonContainerStyle]}>
                <TouchableOpacity
                    style={[ButtonSmallStyles.buttonSmall, props.buttonStyle, {backgroundColor: props.disabled==true? Settings.colorDisabled : props.backgroundColor}]}
                    onPress={()=>{
                        props.disabled==true? null : props.buttonSmallPress();
                    }}
                    delayPressIn={0.02} activeOpacity={0.7}
                >
                    {props.leftIconSource? (props.leftIconSource) : null}
                    <Text style={[ButtonSmallStyles.buttonTitle, {color:  props.disabled==true? Settings.badgeGray : props.textColor}, props.buttonTitleStyle]} numberOfLines={1}>{props.buttonTitle}</Text>
                    {props.rightIconSource? (props.rightIconSource) : null }
                </TouchableOpacity>
            </View>
        );
}

export default ButtonSmall;