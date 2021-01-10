import { StyleSheet,Dimensions } from "react-native";
import { Settings } from "../Components/Typography";
var screenHeight = Math.round(Dimensions.get('window').height);

export const LandingPageStyle = StyleSheet.create({
    Container:{ 
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center' 
    },
    contentContainer:{
        flexDirection:'row',
        justifyContent:'center',
        marginLeft:30,
        marginRight:30
    },
    CameraIconContainer:{
        flex:1,
        alignItems:'center'
    },
    cameraIcon:{
        justifyContent:'center',
        alignItems:'center'
    },
    logoText:{
        marginTop:10, 
        fontWeight:'bold'
    },
});

export const GalleryPageStyle = StyleSheet.create({
	buttonSmallContainer: {
        height:screenHeight,
        width:'100%',
        alignItems:'center',
        justifyContent:'center'
    },
    NoImageView:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },
    NoImageViewBorder: {
        borderRadius:150, 
        height:300, 
        width:300, 
        borderWidth:2, 
        borderColor:Settings.colorGrayLighter,
        alignItems:'center',
        justifyContent:'center'
    },
    ImageClickView: {
        width: '50%',
        height : (screenHeight-160)/2,
        borderWidth:3,
        borderColor:Settings.colorDisabled
    },
    imageSize:{
        width: '100%',
        height : '100%',
    },
    BothButtonContainerStyle:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'flex-end'
    },
    paginationNo:{marginBottom:15,
        marginLeft:14,
        marginRight:14,
    },
    leftButtonTitleStyle:{
        marginLeft:-10
    },
    riButtonTitleStyle:{
        marginRight:-10
    },
    buttonContainerStyle: {
        marginRight:10
    },
});

export const CameraPageStyle = StyleSheet.create({
    flexRow: {
        flexDirection: 'row'
    },
    SwitchCamera:{
        position:'absolute',
        marginLeft:-90,
        marginTop:20
    },
    galleryPhotoStyle:{
        height:50,
        width:40
    },
    SwitchGallery:{
        position:'absolute',
        marginLeft:55,
        marginTop:10
    },
    SwitchCameraIcon:{
        height:40,
        width:40,
        borderRadius:50,
        backgroundColor:Settings.colorDisabled,
        justifyContent:'center',
        alignItems:'center'
    },
    CameraCapture:{
        height:80,
        width:80,
        borderRadius:50,
        borderWidth:3,
        borderColor:Settings.colorWhite, 
        backgroundColor:'transparent'
    },  
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'black',
      },
      preview: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
      },
      capture: {
        flex: 0,
        backgroundColor:'transparent',
        borderRadius: 5,
        alignSelf: 'center',
        marginBottom: 20,
        borderRadius:50,
      }
});
