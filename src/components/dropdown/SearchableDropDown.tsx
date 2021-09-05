import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import ItemDropDown from './ItemDropDown';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Foundation from 'react-native-vector-icons/Foundation';
import {THEME} from '../../styles/colors';
import axios from 'axios';
import {API_KEY} from '../../utils/configs';
import {Country} from '../../model/Country';

interface ISearchableDropDown {
  countries: Array<Country>;
  onChangeCountry: (country: Country) => void;
}

const SearchableDropDown = (props: ISearchableDropDown) => {
  const {countries, onChangeCountry} = props;
  const [showCountries, setShowCountries] = useState(false);
  const [query, setQuery] = useState('');
  const [data, setData] = useState<Array<Country>>([]);
  const [noResult, setNoResult] = useState(false);
  const [textHolder, setTextHolder] = useState('Viet Nam');

  useEffect(() => {
    setNoResult(false);
    if (query.length > 0) {
      const filtered = countries.filter((item: Country) =>
        item.Country.includes(query),
      );
      setNoResult(filtered.length === 0);
      setShowCountries(data.length !== 0);
      setData(filtered);
    }
  }, [query]);

  useEffect(() => {
    setShowCountries(data.length !== 0);
  }, [data.length]);

  const show = () => {
    setData(countries);
    setShowCountries(true);
  };
  const clear = () => {
    setShowCountries(false);
    setQuery('');
  };

  const hasQuery = noResult && query.length > 0;

  return (
    <View style={styles.searchContainer}>
      <TextInput
        placeholder={textHolder}
        style={[
          styles.searchInput,
          {color: noResult ? THEME.error : THEME.text},
        ]}
        value={query}
        onChangeText={text => setQuery(text)}
      />
      <Foundation style={styles.marker} name="marker" />
      <TouchableOpacity
        style={styles.buttonSearch}
        onPress={() => {
          showCountries || hasQuery ? clear() : show();
        }}>
        {showCountries || hasQuery ? (
          <Icon style={styles.iconClear} name="clear" />
        ) : (
          <Icon style={styles.icon} name="keyboard-arrow-down" />
        )}
      </TouchableOpacity>
      {showCountries && (
        <FlatList
          data={data}
          style={styles.flatList}
          ListEmptyComponent={null}
          renderItem={({item, index}) => (
            <ItemDropDown
              item={item}
              index={index}
              onChangeCountry={() => {
                onChangeCountry(item);
                setShowCountries(false);
                setTextHolder(item.Country);
              }}
            />
          )}
          keyExtractor={(item, index) => index.toString()}
        />
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  searchContainer: {
    padding: 8,
    alignItems: 'center',
    marginTop: 10,
  },
  listEmpty: {
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  marker: {
    position: 'absolute',
    top: 23,
    left: '9%',
    fontSize: 21,
    color: THEME.primary,
  },
  searchInput: {
    height: 50,
    width: '95%',
    borderRadius: 25,
    borderColor: THEME.dark,
    borderWidth: 1,
    paddingHorizontal: 40,
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    paddingBottom: 2,
  },
  icon: {
    fontSize: 28,
    color: THEME.primary,
  },
  iconClear: {
    fontSize: 24,
    color: THEME.primary,
    marginRight: 2,
  },
  buttonSearch: {
    position: 'absolute',
    top: 20,
    right: '7%',
  },
  flatList: {
    maxHeight: 325,
    width: '95%',
    borderColor: THEME.dark,
    borderWidth: 1,
    marginTop: 15,
    backgroundColor: 'white',
    paddingHorizontal: 10,
    position: 'absolute',
    borderRadius: 25,
    top: 50,
    zIndex: 99,
    paddingVertical: 5,
  },
});
export default SearchableDropDown;
