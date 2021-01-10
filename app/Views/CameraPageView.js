'use strict';
import React, {useEffect, useState} from 'react';
import { AppRegistry, StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import { RNCamera } from 'react-native-camera';
import { H2, Settings } from "../Components/Typography";
import { PermissionsAndroid, Platform } from 'react-native';
import CameraRoll from '@react-native-community/cameraroll';
import SwitchCameraLogo from "../Assets/switchCamera.svg";
import { CameraPageStyle } from './style';

import GalleryLogo from "../Assets/gaallery.svg";

const PendingView = () => (
  <View>
  </View>
);


const CameraPageView = ({props, navigation}) => {
    const [cameraType, setCameraType] = useState('back');
    const [capturedImage, setFirstImage] = useState('');


    const goBack = () => {
        navigation.goBack();
    }

    const takePicture = async function(camera) {
        const options = { quality: 0.5, base64: true };
        const data = await camera.takePictureAsync(options);
        CameraRoll.save(data.uri, 'photo');
        setFirstImage(data.uri);
    };

    const getFirstPhoto = () => {
      CameraRoll.getPhotos({
        first: 1,
        assetType: 'Photos',
      })
        .then((res) => {
          setFirstImage(res.edges[0].node.image.uri);
        })
    }


    useEffect(() => {
      getFirstPhoto();
    }, []);

    useEffect(() => {

    }, [capturedImage]);

    useEffect(() => {

    }, [cameraType]);
    
    const requestPermissions = async () => {
        if(Platform.OS === 'android') { 
            const result = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.CAMERA)
            if(result === PermissionsAndroid.RESULTS.GRANTED || result === true){
                const writePermission = await PermissionsAndroid.request( PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE);
                if( (result === PermissionsAndroid.RESULTS.GRANTED || result === true) && writePermission==="granted") {
                    getFirstPhoto();
                    return result === PermissionsAndroid.RESULTS.GRANTED || result === true
                }
                else goBack();
            }
            else goBack();

        }
        return true;
    }

    return (
      <View style={CameraPageStyle.container}>
        <RNCamera
          style={CameraPageStyle.preview}
          type= {cameraType}
          flashMode={RNCamera.Constants.FlashMode.off}
          captureAudio={false}
        >
          {({ camera, status }) => {
            if (status !== 'READY') {
                requestPermissions();
            }
            return (
              <View style={CameraPageStyle.flexRow}>

                    <TouchableOpacity style={CameraPageStyle.SwitchCamera} onPress={()=>{
                        if(cameraType === 'front') setCameraType('back');
                        else setCameraType('front');
                    }}>
                    <View style={CameraPageStyle.SwitchCameraIcon}>
                        <SwitchCameraLogo height={30} width={30}/>
                    </View>
                    </TouchableOpacity>
   
                    <TouchableOpacity onPress={() => takePicture(camera)} style={CameraPageStyle.capture}>
                    <View style={CameraPageStyle.CameraCapture}>
                    </View>
                    </TouchableOpacity>
                    <View>

                    <TouchableOpacity style={CameraPageStyle.SwitchGallery} onPress={()=>{
                        navigation.navigate('Gallery')
                    }}>
                      <View>
                      {capturedImage==''?
                        <GalleryLogo height={50} width={40}/>
                        :
                        <Image
                          style={CameraPageStyle.galleryPhotoStyle}
                          source={{uri: capturedImage}}
                        />
                      }
                      </View>
                    </TouchableOpacity>
                    

                    </View>
                </View>
            );
          }}
        </RNCamera>
      </View>
    );


}

export default CameraPageView;
