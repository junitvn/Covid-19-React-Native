import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {numberWithCommas} from '../utils/utils';
interface IInfoBlock {
  title: string;
  newCase: number;
  total: number;
  primaryColor: string;
  secondaryColor: string;
}

const InfoBlock = (props: IInfoBlock) => {
  const {title, newCase, total, primaryColor, secondaryColor} = props;
  return (
    <View style={[styles.container, {backgroundColor: secondaryColor}]}>
      <View style={styles.content}>
        <Text style={{color: primaryColor, fontSize: 16}}>
          {numberWithCommas(total)}
        </Text>
        <Text>{title}</Text>
      </View>
      <Text style={[styles.textNewCase, {backgroundColor: primaryColor}]}>
        {numberWithCommas(newCase)}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 13,
    borderRadius: 10,
    justifyContent: 'space-between',
    height: 120,
  },
  content: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  textNewCase: {
    textAlign: 'center',
    paddingVertical: 4,
    borderRadius: 8,
    color: 'white',
  },
});

export default InfoBlock;
