import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';

export default function Splash(props) {
  useEffect(() => {
    setTimeout(() => {
      props.navigation.navigate('Home');
    }, 1000);
  });
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Splash Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
