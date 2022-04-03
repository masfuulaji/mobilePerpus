import {StyleSheet, View} from 'react-native';
import React, {useState} from 'react';
import {SliderBox} from 'react-native-image-slider-box';
import {Slider1, Slider2} from '../../../assets/image';
import {responsiveHeight} from '../../../utils';

const BannerSlider = () => {
  const [banner, setBanner] = useState([Slider1, Slider2]);
  return (
    <View style={styles.container}>
      <SliderBox
        images={banner}
        autoplay
        circleLoop
        sliderBoxHeight={responsiveHeight(200)}
        ImageComponentStyle={styles.slider}
        dotStyle={styles.dotStyle}
        dotColor="#36abe3"
        imageLoadingColor="#36abe3"
      />
    </View>
  );
};

export default BannerSlider;

const styles = StyleSheet.create({
  container: {
    marginTop: -15,
  },
  slider: {
    borderRadius: 10,
    width: 380,
  },
  dotStyle: {
    width: 10,
    height: 5,
    borderRadius: 5,
  },
});
