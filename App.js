import React from 'react';
import {Text, View, Image, TextInput} from 'react-native';

const App = () => {
  return (
    <View>
      <Text>Welcome to Hell</Text>
      <Haha />
      <ImageHell />
      <TextInput style={{borderWidth: 1}} />
    </View>
  );
};

const Haha = () => {
  return <Text>Hahaa</Text>;
};

const ImageHell = () => {
  return (
    <Image
      source={{uri: 'https://placeimg.com/100/100/arch'}}
      style={{width: 200, height: 200}}
    />
  );
};

export default App;
