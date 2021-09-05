import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {INFO_BLOCK} from '../styles/colors';
import InfoBlock from './InfoBlock';

interface IInfoContainer {
  data: {
    NewConfirmed: number;
    NewDeaths: number;
    NewRecovered: number;
    TotalConfirmed: number;
    TotalDeaths: number;
    TotalRecovered: number;
  };
  title: string;
}

const InfoContainer = (props: IInfoContainer) => {
  const {data, title} = props;
  const {
    NewConfirmed,
    NewDeaths,
    NewRecovered,
    TotalRecovered,
    TotalDeaths,
    TotalConfirmed,
  } = data;
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{title}</Text>
      <View style={styles.contentContainer}>
        <InfoBlock
          title="Nhiễm bệnh"
          newCase={NewConfirmed}
          total={TotalConfirmed}
          primaryColor={INFO_BLOCK.primaryConfirm}
          secondaryColor={INFO_BLOCK.secondaryConfirm}
        />
        <InfoBlock
          title="Tử vong"
          newCase={NewDeaths}
          total={TotalDeaths}
          primaryColor={INFO_BLOCK.primaryDeaths}
          secondaryColor={INFO_BLOCK.secondaryDeaths}
        />
        <InfoBlock
          title="Chữa khỏi"
          newCase={NewRecovered}
          total={TotalRecovered}
          primaryColor={INFO_BLOCK.primaryRecoverd}
          secondaryColor={INFO_BLOCK.secondaryRecoverd}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    height: 200,
    width: '100%',
    paddingTop: 10,
  },
  text: {
    fontSize: 18,
    marginLeft: 12,
  },
  contentContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});
export default InfoContainer;
