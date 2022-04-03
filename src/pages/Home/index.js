import {StyleSheet, View} from 'react-native';
import React from 'react';
import {BannerSlider, Header} from '../../components';

export default function Home() {
  return (
    <View style={styles.page}>
      <Header />
      <BannerSlider />
    </View>
  );
}

const styles = StyleSheet.create({
  page: {flex: 1, backgroundColor: '#fff'},
});
