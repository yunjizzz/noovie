import AppLoading from 'expo-app-loading';
import React,{useState} from 'react';
import { Text,Image } from 'react-native';
import * as Font from "expo-font";
import { Ionicons } from "@expo/vector-icons";
import { Asset,useAssets } from 'expo-asset';
import { NavigationContainer } from '@react-navigation/native';
import Tabs from './navigation/Tabs';

const loadFonts = (fonts) => fonts.map(font => Font.loadAsync(font));

const loadImages = (images) => images.map((image) => {
  if(typeof image === "string"){
    return Image.prefetch(image);
  }else{
    return Asset.loadAsync(image);
  }
})

export default function App() {
  const [assets] = useAssets("https://avatars.githubusercontent.com/u/60842443?s=400&u=9351ff717325e85b9ae172c2001d13c73bb645be&v=4");
  const [loaded] = Font.useFonts(Ionicons.font);
  
  if(!assets || !loaded){
    return (<AppLoading/>);  
  }
  return (
    <NavigationContainer>
      <Tabs/>
    </NavigationContainer>
  );
}
