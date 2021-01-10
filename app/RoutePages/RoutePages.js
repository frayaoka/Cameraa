import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import GalleryPageView from '../Views/GalleryPageView';
import LandingPage from '../Views/LandingPage';
import CameraPageView from '../Views/CameraPageView';

const Stack = createStackNavigator();

function RoutePages() {
  return (
      <Stack.Navigator initialRouteName="LandingPage">
        <Stack.Screen name="Home" component={LandingPage} />
        <Stack.Screen name="Gallery" component={GalleryPageView} />
        <Stack.Screen name="Camera" component={CameraPageView} options={{headerShown: false}}/>
      </Stack.Navigator>
  );
}

export default RoutePages;
