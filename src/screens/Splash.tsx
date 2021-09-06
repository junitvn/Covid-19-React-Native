import axios from 'axios';
import React, {useEffect} from 'react';
import {useState} from 'react';
import {ActivityIndicator} from 'react-native';
import {View, Text, Image, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {THEME} from '../styles/colors';

const Splash = (props: any) => {
  const {navigation} = props;
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('https://api.covid19api.com/summary').then(response => {
      setLoading(false);
      navigation.replace('Home', {data: response.data});
    });
  }, []);

  return (
    <LinearGradient
      colors={['#FFFFFF', '#FFFFFF']}
      start={{x: 0, y: 0}}
      end={{x: 1, y: 0}}
      style={styles.container}>
      <Image
        source={require('../assets/doctor_fight.png')}
        resizeMode="contain"
        style={styles.image}
      />
      <Text style={styles.content}>WEAR 1 OR 2 MASK</Text>
      <View style={styles.contentContainer}>
        {loading && (
          <ActivityIndicator
            size="large"
            color={THEME.primary}
            style={styles.indicator}
          />
        )}
      </View>
    </LinearGradient>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 70,
  },
  image: {
    height: 250,
    width: 250,
  },
  content: {
    fontFamily: 'Poppins-Regular',
    fontSize: 18,
    color: THEME.primary,
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  indicator: {
    marginTop: 20,
  },
});
export default Splash;
