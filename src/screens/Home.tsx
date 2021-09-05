import React, {useState} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import Header from '../components/Header';
import InfoContainer from '../components/InfoContainer';
import Search from '../components/Search';

export const HomeContext = React.createContext({
  currentItem: {},
  setSearchResult: (item: any) => {},
  shouldShowResult: false,
});

const Home = (props: any) => {
  const {Global, Countries} = props.route.params.params.data;
  const defaultItem = Countries.find((item: any) =>
    item.Country.includes('Viet'),
  );
  const [currentItem, setCurrentItem] = useState(defaultItem);
  const [shouldShowResult, setShouldShowResult] = useState(true);

  const setSearchResult = (item: any) => {
    setCurrentItem(item);
    setShouldShowResult(false);
  };

  return (
    <HomeContext.Provider
      value={{currentItem, setSearchResult, shouldShowResult}}>
      <View style={styles.fill}>
        <Header />
        <Search data={Countries} />
        <View style={styles.blockContainer}>
          <InfoContainer title={currentItem.Country} data={currentItem} />
        </View>
        <View style={styles.blockContainer}>
          <InfoContainer title="Thế giới" data={Global} />
        </View>
      </View>
    </HomeContext.Provider>
  );
};
const styles = StyleSheet.create({
  fill: {
    flex: 1,
    backgroundColor: 'white',
  },
  blockContainer: {
    height: 200,
    width: '92%',
    borderRadius: 10,
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 10,
    alignSelf: 'center',
  },
});
export default Home;
