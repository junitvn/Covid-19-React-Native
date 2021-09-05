import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Header = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Icon style={styles.icon} name="menu" />
      </TouchableOpacity>
      <Text style={styles.text}>Thông tin dịch bệnh</Text>
      <TouchableOpacity>
        <Icon style={styles.icon} name="cached" />
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    height: 55,
    flexDirection: 'row',
    justifyContent: 'space-between',
    elevation: 2,
    alignItems: 'center',
    paddingHorizontal: 8,
    borderBottomWidth: 0.1,
  },
  icon: {
    fontSize: 24,
    color: 'black',
  },
  text: {
    fontSize: 20,
  },
});
export default Header;
