import React, {useEffect, useState} from 'react';
import { 
    View, 
    Modal, 
    Image,
    TouchableWithoutFeedback, 
    TouchableOpacity,
} from 'react-native';
import Closewhitelogo from "../../Assets/closewhite.svg";
import { showClickedModalStyle } from './style';


const ShowClickedImageModal = (props) => {

  return (
        <Modal
            visible={props.showImageModalVisibility}
            presentationStyle={'overFullScreen'}
            transparent={true}
            animationType={'slide'}
            onRequestClose={() => props.closeShowImageModal()} 
        >
            <TouchableWithoutFeedback onPress={props.closeShowImageModal}>
                <View style={showClickedModalStyle.container}>
                        <TouchableOpacity style={showClickedModalStyle.crossicon} onPress={()=>{
                            props.closeShowImageModal();
                        }}>
                            <Closewhitelogo/>
                        </TouchableOpacity>
                        <View style={[showClickedModalStyle.ModalContainer]}>
                            {props.clickImageUrl?
                                <Image
                                style={{
                                    width: '85%',
                                    height: '85%',
                                }}
                                source={{uri: props.clickImageUrl}}
                                />
                                :null
                            }

                        </View>
                </View>
            </TouchableWithoutFeedback>
        </Modal>
  );
};


export default ShowClickedImageModal;