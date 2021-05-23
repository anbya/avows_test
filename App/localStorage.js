import React, { Component } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
const _storeData = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, value);
  } catch (error) {
    console.log(error);
  }
}

const _retrieveData = async (key) => {
  try {
    const data = await AsyncStorage.getItem(key);
    return data;
  } catch (error) {
    console.log(error);
  }
}
const _clearData = async () => {
  try {
    await AsyncStorage.clear();
  } catch (error) {
    console.log(error);
  }
}

export {_storeData, _retrieveData,_clearData};