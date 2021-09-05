import React, {useState} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Doctor from '../assets/icons/Drcorona.svg';
import Menu from '../assets/icons/menu.svg';
import CasesInfomation from '../components/case_info/CasesInfomation';
import SearchableDropDown from '../components/dropdown/SearchableDropDown';
import {Country} from '../model/Country';
import {THEME} from '../styles/colors';

const Homev2 = (props: any) => {
  const {route} = props;
  const {Countries} = route?.params?.data;
  const defaultCountry = Countries.find((country: Country) =>
    country.Country.includes('Vie'),
  );
  console.log(defaultCountry);

  const [currentCountry, setCurrentCountry] = useState<Country>(defaultCountry);

  const onChangeCountry = (country: Country) => {
    setCurrentCountry(country);
  };

  return (
    <View style={{backgroundColor: THEME.background}}>
      <View style={styles.fill}>
        <LinearGradient
          colors={['#142EA4', '#3B82D9']}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          style={styles.linearGradient}>
          <Image
            source={require('../assets/images/virus.png')}
            resizeMode="cover"
          />
          <Menu style={styles.menu} />
          <Text
            style={styles.textHeader}>{`All you need \nis stay at home.`}</Text>
          <Doctor style={styles.doctor} />
        </LinearGradient>
      </View>
      <View style={styles.container}>
        <SearchableDropDown
          countries={Countries}
          onChangeCountry={onChangeCountry}
        />
        <View style={styles.caseContainer}>
          <Text style={styles.title}>Case update</Text>
          <View style={styles.textRow}>
            <Text style={styles.subtitle}>Newest update September 07</Text>
            <Text style={styles.textSeeMore}>See detail</Text>
          </View>
          <CasesInfomation data={currentCountry} />
        </View>
        <View style={styles.caseContainer}>
          <View style={styles.textRow}>
            <Text style={styles.title}>Spread of Virus</Text>
            <Text style={styles.textSeeMore}>See detail</Text>
          </View>
          <View style={styles.mapContainer}>
            <Image
              source={require('../assets/images/map.png')}
              resizeMode="cover"
            />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  fill: {
    height: 250,
    width: '100%',
    transform: [{scaleX: 2}],
    borderBottomStartRadius: 200,
    borderBottomEndRadius: 200,
    overflow: 'hidden',
    backgroundColor: THEME.background,
  },
  linearGradient: {
    height: 250,
    width: '100%',
    transform: [{scaleX: 0.5}],
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {color: 'black'},
  doctor: {
    position: 'absolute',
    top: 50,
    left: 50,
  },
  menu: {
    position: 'absolute',
    top: 30,
    right: 25,
  },
  textHeader: {
    position: 'absolute',
    top: 80,
    right: 50,
    fontSize: 20,
    color: 'white',
    fontFamily: 'Poppins-Medium',
  },
  container: {
    width: '100%',
    backgroundColor: THEME.background,
    marginTop: 5,
  },
  caseContainer: {
    paddingHorizontal: 17,
    marginTop: 20,
  },
  title: {
    fontSize: 17,
    fontWeight: 'bold',
    color: THEME.title,
  },
  subtitle: {
    fontSize: 13,
    color: THEME.subtitle,
  },
  textRow: {
    marginTop: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textSeeMore: {
    fontSize: 13,
    color: THEME.primary,
  },
  mapContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    paddingVertical: 25,
    borderRadius: 25,
    marginTop: 20,
  },
});

export default Homev2;
