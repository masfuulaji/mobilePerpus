import {StyleSheet, TextInput, View} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {responsiveHeight, fonts} from '../../../utils';
import {Button, Space} from '../../shared';

const Header = () => {
  return (
    <View style={styles.container}>
      <View style={styles.wrapperHeader}>
        {/* Search  */}
        <View style={styles.searchSection}>
          <Icon name="search" size={25} />
          <TextInput placeholder="Find Books ..." style={styles.input} />
        </View>
        <Space width={10} />
        {/* Button */}
        <Button icon="albums" totalBook={10} />
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#36abe3',
    height: responsiveHeight(200),
  },
  wrapperHeader: {
    marginTop: 15,
    marginHorizontal: 20,
    flexDirection: 'row',
  },
  searchSection: {
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingLeft: 15,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    fontSize: 16,
    fontFamily: fonts.primary.regular,
  },
});
