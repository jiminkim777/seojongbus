import * as React from 'react';
import { Platform, StatusBar } from 'react-native';
import {
  SafeAreaContext,
  SafeAreaProvider,
  SafeAreaConsumer,
  safea,
} from 'react-native-safe-area-context';

// Temprary fix for react-native-safe-area context collapsing content on reload
export default function SafeAreaFix({ children }) {
  if (Platform.OS !== 'android') {
    return children;
  }

  return (
    <SafeAreaProvider
      value={{ top: StatusBar.currentHeight, right: 0, left: 0, bottom: 0 }}
    >
      {children}
    </SafeAreaProvider>
  );
}
