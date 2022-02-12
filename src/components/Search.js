import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';

const Search = () => {
  return (
    <View>
      <TextInput style={styles.searchBar} placeholder="Ara..." />
    </View>
  );
};

const styles = StyleSheet.create({
  searchBar: {
    borderWidth: 1,
    fontSize:22,
    borderRadius: 5,
    margin: 10,
    padding: 10,
    backgroundColor: '#E8F0F2',
    borderColor: '#E8F0F2',
    color: 'black',
  },
});

export default Search;