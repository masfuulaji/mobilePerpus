import {StyleSheet, Text, View, Image} from 'react-native';
import React, {useEffect} from 'react';
import Logo from '../../assets/image/shipit.jpg';

export default function Splash(props) {
  useEffect(() => {
    setTimeout(() => {
      props.navigation.navigate('Home');
    }, 1000);
  });
  return (
    <View style={styles.pages}>
      <Image source={Logo} style={styles.imgLogo} />
      <Text>Splash Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  pages: {flex: 1, alignItems: 'center', justifyContent: 'center'},
  imgLogo: {width: 100, height: 100, borderRadius: 60},
});
