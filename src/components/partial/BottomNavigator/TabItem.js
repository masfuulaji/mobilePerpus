import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {fonts} from '../../../utils';

const TabItem = ({isFocused, onPress, onLongPress, label}) => {
  const MenuIcon = () => {
    if (label === 'Home') {
      return isFocused ? (
        <Icon name="home" size={25} />
      ) : (
        <Icon name="home-outline" size={25} color="#fff" />
      );
    }
    if (label === 'Library') {
      return isFocused ? (
        <Icon name="library" size={25} />
      ) : (
        <Icon name="library-outline" size={25} color="#fff" />
      );
    }
    if (label === 'Category') {
      return isFocused ? (
        <Icon name="list" size={25} />
      ) : (
        <Icon name="list-outline" size={25} color="#fff" />
      );
    }
  };
  return (
    <TouchableOpacity
      onPress={onPress}
      onLongPress={onLongPress}
      style={styles.container}>
      <MenuIcon />
      <Text style={styles.text(isFocused)}>{label}</Text>
    </TouchableOpacity>
  );
};

export default TabItem;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
  },
  text: isFocused => ({
    color: isFocused ? '#144f46' : '#fff',
    fontSize: 12,
    marginTop: 3,
    fontFamily: fonts.primary.bold,
  }),
});
