import React, {useEffect, useState} from 'react';
import {
  View,
  Image,
  FlatList,
  PermissionsAndroid,
  Platform,
  TouchableOpacity,
} from 'react-native';
import CameraRoll from '@react-native-community/cameraroll';
import ShowClickedImageModal from '../Components/Modals/ShowClickedImageModal.js';
import {TextPrimary,H2} from '../Components/Typography';
import ButtonSmall from '../Components/Button/Button.js';
import { GalleryPageStyle } from './style';

const GalleryPageView = ({navigation}) => {
  const [data, setData] = useState('');
  const [showFourImages, setFourImages] = useState('');
  const [paginationNumber, changePagination] = useState(1);
  const [lastPageNumber, updateLastPageNumber] = useState(1);
  const [showImageModalVisibility, setshowImageModalVisibility] = useState(false);
  const [clickedImage, setclickedImageUrl] = useState(false);
  const [albums, setAlbum] = useState('');
  const [dataLoaded, setDataLoaded] = useState(false);

  const getPhotoCount = () => {
      CameraRoll.getAlbums({ assetType: 'Photos' })
      .then((res)=>{
        setAlbum(res);
        changePagination(1);
      })
  };

  const getPhotos = () => {
    var tempPhotoCount = 0;
    for(var i=0;i<albums.length;i++){
      tempPhotoCount = tempPhotoCount + albums[i].count;
      
    }

    CameraRoll.getPhotos({
      first: tempPhotoCount,
      assetType: 'Photos',
    })
      .then((res) => {
        setData(res.edges);

        var tempArrayLength = res.edges.length;
        var lastPageNumber = 1;
        if(tempArrayLength%4 ==0 ) lastPageNumber = tempArrayLength/4;
        else {
            lastPageNumber = tempArrayLength/4;
            lastPageNumber = parseInt(lastPageNumber) +1;
        }
        updateLastPageNumber(lastPageNumber);

        var tempArray = [];
        if(res.edges.length>4){
          for(var i=0;i<4;i++){
            tempArray.push(res.edges[i]);
          };
        }
        else{
          for(var i=0;i<res.edges.length;i++){
            tempArray.push(res.edges[i]);
          };
        }
        setFourImages(tempArray);
        this.timeoutHandle = setTimeout(() => {
          setDataLoaded(true);
        }, 1200);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const closeShowImageModal = () => {
    setshowImageModalVisibility(!showImageModalVisibility)
  }

  const askPermission = async () => {
    if (Platform.OS === 'android') {
      const result = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE);
      if (result !== 'granted') {
        console.log('Access to pictures was denied');
        return;
      } else {
        getPhotoCount();
      }
    } else {
      getPhotoCount();
    }
  };

  useEffect(() => {
    askPermission();
  }, []);

  useEffect(() => {
    getPhotos();
  }, [albums]);

  const nextButtonPress = () => {
    var tempArray = [];
    var tempNextRange = (paginationNumber+1) *4;
    if(data.length > paginationNumber*4 + 4){
      for(var i=paginationNumber*4 ; i<tempNextRange ; i++){
        tempArray.push(data[i]);
      }
    }
    else{
      for(var i = paginationNumber*4; i<data.length ; i++){
        tempArray.push(data[i]);
      }
    }
    changePagination (paginationNumber+1);
    setFourImages(tempArray);
  }

 
  const prevButtonPress = () => {
    var tempArray = [];
    var tempPrevRange = (paginationNumber-1) *4;
    for(var i=paginationNumber*4 -8 ; i< paginationNumber*4 -4; i++){
      tempArray.push(data[i]);
    }
    changePagination (paginationNumber-1);
    setFourImages(tempArray);
  };

  return (
    <View style={{flex:1}}>
      {data.length==0?
          <>
            {dataLoaded==false?
              <></>
              :
              <View style={GalleryPageStyle.NoImageView}>
                <View style={GalleryPageStyle.NoImageViewBorder}>
                  <H2 textTitle= "No Pictures Found" />
                </View>
              </View>
            }
          </>
        :
        <>
          <FlatList
            data={showFourImages}
            numColumns={2}
            keyExtractor={ (item) => item.node.image.uri} 
            renderItem={({item}) => (
                <TouchableOpacity 
                  style={GalleryPageStyle.ImageClickView}
                onPress = {()=>{
                  setshowImageModalVisibility(!showImageModalVisibility);
                  setclickedImageUrl(item.node.image.uri);
                }}>
                  <Image
                    style={GalleryPageStyle.imageSize}
                    source={{uri: item.node.image.uri}}
                  />
                </TouchableOpacity>
            )}
          />

          <View style ={GalleryPageStyle.BothButtonContainerStyle}>
            <ButtonSmall 
              buttonContainerStyle={GalleryPageStyle.buttonContainerStyle} 
              buttonTitle="<< Prev" 
              buttonTitleStyle={GalleryPageStyle.leftButtonTitleStyle} 
              disabled = {paginationNumber==1? true : false }
              buttonSmallPress={()=> prevButtonPress()}
            />
                <TextPrimary 
                  textTitle={paginationNumber} 
                  textStyle={GalleryPageStyle.paginationNo}
                /> 
            <ButtonSmall 
              buttonContainerStyle={GalleryPageStyle.buttonContainerStyle} 
              buttonTitle="Next >>" 
              buttonTitleStyle={GalleryPageStyle.rightButtonTitleStyle} 
              buttonSmallPress={()=> nextButtonPress()}
              disabled = {paginationNumber == lastPageNumber? true:false}
            />
            
          </View>
          <View style={{marginBottom:15}}></View>

          <ShowClickedImageModal 
            showImageModalVisibility={showImageModalVisibility} 
            closeShowImageModal={()=> closeShowImageModal()} 
            clickImageUrl={clickedImage}
          />
        </>
      }
      
    </View>
  );
};


export default GalleryPageView;