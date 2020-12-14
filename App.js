import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Alert, Image } from 'react-native';
import { Asset } from 'expo-asset';
import Loading from './Loading';
import axios from 'axios';
import { NavigationContainer } from '@react-navigation/native';
import { MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';
import { AppLoading } from 'expo';
import * as Font from 'expo-font';
import SafeAreaFix from './SafeAreaFix';
import Stack from './navigation/Stack';

//로딩 이미지 가져옴
const cacheImages = (images) =>
  images.map((image) => {
    if (typeof image === 'string') {
      return Image.prefetch(image);
    } else {
      return Asset.fromModule(image).downloadAsync();
    }
  });

//로딩 폰트 가져옴
const cacheFonts = (fonts) =>
  fonts.map((font) => [Font.loadAsync(font), Font.loadAsync(font)]);

//메인 함수 컴포넌트
export default function App() {
  //상태값
  const [isLoading, setIsLoading] = React.useState(false);

  //componentDidMount 기능
  // useEffect(() => {
  //   //getBusInfo();
  //   console.log('mount it!');
  //   //state값 변경
  //   setIsLoading(false);
  // }, []);

  const loadAssets = () => {
    const images = cacheImages([
      'https://images.unsplash.com/photo-1562887189-e5d078343de4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
      require('./assets/splash.png'),
    ]);
    console.log('is Loading...');
    const fonts = cacheFonts([Ionicons.font]);
    return Promise.all([...images, ...fonts]);
  };
  const onFinish = () => setIsLoading(true);

  return isLoading ? (
    <SafeAreaFix>
      <NavigationContainer>
        <Stack />
      </NavigationContainer>
    </SafeAreaFix>
  ) : (
    <AppLoading
      startAsync={loadAssets}
      onFinish={onFinish}
      onError={console.error}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
