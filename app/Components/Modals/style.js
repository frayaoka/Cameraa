import { StyleSheet } from "react-native";
import {Settings} from '../Typography';


export const showClickedModalStyle = StyleSheet.create({
    container: {
        backgroundColor: 'rgba(0,0,0,0.7)',
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
    ModalContainer: {
        width: "88.89%",
        borderRadius: 2,
        backgroundColor: Settings.colorGrayLighter,
        borderColor: Settings.colorGrayLighter,
        alignSelf : 'center',
        justifyContent : 'center',
        alignItems:'center'
    },
    crossicon:{
        justifyContent:'center',
        alignItems:'center',
        height:34,
        width:34,
        borderRadius:50,
        borderWidth:1,
        borderColor:Settings.colorGrayLighter,
        alignSelf:'flex-end',
        marginRight :"5.56%",
        marginBottom:10,
    },
});
