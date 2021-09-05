import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {THEME} from '../../styles/colors';
import {numberWithCommas} from '../../utils/utils';

interface ICaseBlock {
  title: string;
  newCase: number;
  primaryColor: string;
  secondaryColor: string;
}

const CaseBlock = (props: ICaseBlock) => {
  const {title, newCase, primaryColor, secondaryColor} = props;
  return (
    <View style={styles.blockContainer}>
      <FontAwesome
        name="circle-o"
        style={[
          styles.icon,
          {backgroundColor: secondaryColor, color: primaryColor},
        ]}
      />
      <Text style={[styles.textCase, {color: primaryColor}]}>
        {numberWithCommas(newCase)}
      </Text>
      <Text style={styles.textTitle}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  blockContainer: {
    justifyContent: 'space-evenly',
    alignItems: 'center',
    height: 140,
    flex: 1,
  },
  icon: {
    fontSize: 18,
    padding: 10,
    paddingHorizontal: 11,
    borderRadius: 24,
  },
  textCase: {
    fontSize: 32,
    fontWeight: 'bold',
  },
  textTitle: {
    fontSize: 12,
    color: THEME.text,
  },
});

export default CaseBlock;
