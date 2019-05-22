import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import { createStackNavigator, createAppContainer} from 'react-navigation';
import HomeScreen from './src/components/HomeScreen';
import ProfileScreen from './src/components/ProfileScreen';
import WeightScreen from './src/components/WeightScreen';
import UricAcidScreen from './src/components/BloodTest/UricAcid';


const MainNavigator = createStackNavigator(
  {
    Home:     HomeScreen,
    Profile:  ProfileScreen,
    Weight:   WeightScreen,
    UricAcid: UricAcidScreen,
  },
  {
    initialRouteName: 'Home'
  }
);

export default App = createAppContainer(MainNavigator)

