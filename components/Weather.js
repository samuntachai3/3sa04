import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function Weather( props ) {
  
  return (
    <View style={styles.container} >
      <Text style = {{fontSize: 30}}>Weather {props.zipCode}</Text>
      <View style={{width: 30,height: 20, backgroundColor: 'red', }}></View>
      <View style={{width: 30,height: 20, backgroundColor: 'blue', }}></View>  
      <View style={{width: 30,height: 20, backgroundColor: 'red', }}></View>  
      <View style={{width: 30,height: 20, backgroundColor: 'blue', }}></View>    
    </View>
  );
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#0999',
        alignItems: 'center',
        justifyContent: 'center',
    
        },
  })
  
