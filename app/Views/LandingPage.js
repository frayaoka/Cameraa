import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { H2, TextPrimary } from '../Components/Typography';
import { RNCamera } from 'react-native-camera';

import CameraLogo from "../Assets/camera.svg";
import GalleryLogo from "../Assets/gaallery.svg";
import { LandingPageStyle } from './style';

const LandingPage = ({navigation}) => {

  return (
        <View style={LandingPageStyle.Container}>
            <View style={LandingPageStyle.contentContainer}>
                <View style={LandingPageStyle.CameraIconContainer}>
                    <TouchableOpacity style={LandingPageStyle.CameraIcon}
                    onPress={() => navigation.navigate('Camera')}
                    >
                        <CameraLogo height={50} width={50}/>
                        <TextPrimary textTitle="Camera" textStyle={LandingPageStyle.logoText}/>
                    </TouchableOpacity>
                </View>
                <View style={LandingPageStyle.CameraIconContainer}>
                    <TouchableOpacity style={LandingPageStyle.cameraIcon}
                    onPress={() => navigation.navigate('Gallery')}
                    >
                        <GalleryLogo height={50} width={50}/>
                        <TextPrimary textTitle="Gallery" textStyle={LandingPageStyle.logoText}/>
                    </TouchableOpacity>  
                </View>
            </View>
        </View>
    );
}

export default LandingPage;
