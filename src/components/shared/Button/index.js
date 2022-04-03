import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

const Button = ({icon, totalBook}) => {
  return (
    <TouchableOpacity style={styles.container}>
      <Icon name={icon} size={30} />
      {totalBook && (
        <View style={styles.notif}>
          <Text style={styles.textNotif}>{totalBook}</Text>
        </View>
      )}
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 10,
  },
  notif: {
    position: 'absolute',
    top: 5,
    right: 5,
    backgroundColor: '#cc0000',
    borderRadius: 3,
    padding: 1,
  },
  textNotif: {
    fontSize: 12,
    color: '#fff',
  },
});
