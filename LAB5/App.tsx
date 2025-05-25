import React from 'react';
import { AuthProvider } from './context/AuthencationContext';
import { MenuProvider } from 'react-native-popup-menu';
import Navigation from './component/Navigation';
import AsyncStorage from '@react-native-async-storage/async-storage';




export default function App() {
  return (
    <MenuProvider>
      <AuthProvider>
        <Navigation />       
      </AuthProvider>
    </MenuProvider>
  );
}