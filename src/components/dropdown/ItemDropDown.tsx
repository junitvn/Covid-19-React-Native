import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {THEME} from '../../styles/colors';

const ItemDropDown = (props: any) => {
  const {item, onChangeCountry} = props;
  return (
    <TouchableOpacity style={styles.itemDropDown} onPress={onChangeCountry}>
      <Text style={styles.textItem}>{item.Country}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  itemDropDown: {
    paddingHorizontal: 27,
    paddingVertical: 15,
  },
  textItem: {
    fontSize: 14,
    color: THEME.text,
    fontFamily: 'Poppins-Regular',
  },
});

export default ItemDropDown;
