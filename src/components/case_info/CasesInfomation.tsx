import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Country} from '../../model/Country';
import {INFO_BLOCK, THEME} from '../../styles/colors';
import CaseBlock from './CaseBlock';

interface ICasesInfomation {
  data: Country;
}

const CasesInfomation = (props: ICasesInfomation) => {
  const {NewConfirmed, NewDeaths, NewRecovered} = props.data;
  return (
    <View style={styles.caseContainer}>
      <CaseBlock
        newCase={NewConfirmed}
        title="Infected"
        primaryColor={INFO_BLOCK.primaryConfirm}
        secondaryColor={INFO_BLOCK.secondaryConfirm}
      />
      <CaseBlock
        newCase={NewDeaths}
        title="Deaths"
        primaryColor={INFO_BLOCK.primaryDeaths}
        secondaryColor={INFO_BLOCK.secondaryDeaths}
      />
      <CaseBlock
        newCase={NewRecovered}
        title="Recoverd"
        primaryColor={INFO_BLOCK.primaryRecoverd}
        secondaryColor={INFO_BLOCK.secondaryRecoverd}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  caseContainer: {
    padding: 10,
    borderRadius: 20,
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 18,
  },
});

export default CasesInfomation;
