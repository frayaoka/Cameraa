import React, { useState } from 'react';
import GalleryPageView from './app/Views/GalleryPageView';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import RoutePages from './app/RoutePages/RoutePages';

export default function App() {

return (
  <>
    <NavigationContainer>
      <RoutePages/>
    </NavigationContainer>
  </>
);
}

