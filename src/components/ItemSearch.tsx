import React, {useContext} from 'react';
import {TouchableOpacity} from 'react-native';
import {StyleSheet} from 'react-native';
import {View, Text} from 'react-native';
import {HomeContext} from '../screens/Home';

const ItemSearch = (props: any) => {
  const {item, index} = props;
  const {setSearchResult} = useContext(HomeContext);
  return (
    <TouchableOpacity
      onPress={() => setSearchResult(item)}
      style={[styles.itemContainer, {borderTopWidth: index === 0 ? 0 : 1}]}>
      <Text>{item.Country}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    paddingVertical: 10,
    borderTopColor: 'gray',
  },
});

export default ItemSearch;
