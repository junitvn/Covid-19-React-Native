import React, {useContext, useMemo, useState} from 'react';
import {useEffect} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {HomeContext} from '../screens/Home';
import ItemSearch from './ItemSearch';

const Search = (props: any) => {
  const {data} = props;
  const [query, setQuery] = useState('');
  const [hasValue, setHasValue] = useState(false);
  const [result, setResult] = useState([]);
  const {shouldShowResult} = useContext(HomeContext);

  useEffect(() => {
    !shouldShowResult && clear();
  }, [shouldShowResult]);

  useEffect(() => {
    if (query.length > 0) {
      setHasValue(true);
      if (query.length > 1) search();
    } else {
      setResult([]);
      setHasValue(false);
    }
  }, [query]);

  const search = () => {
    const filtered = data.filter((item: any) => item.Country.includes(query));
    setResult(filtered);
  };

  const clear = () => {
    setQuery('');
    setResult([]);
  };

  return (
    <View style={styles.searchContainer}>
      <TextInput
        style={styles.searchInput}
        value={query}
        onChangeText={(value: string) => setQuery(value)}
      />
      <TouchableOpacity style={styles.buttonSearch} onPress={clear}>
        {hasValue ? (
          <Icon style={styles.searchIcon} name="clear" />
        ) : (
          <Icon style={styles.searchIcon} name="search" />
        )}
      </TouchableOpacity>
      {result.length !== 0 && shouldShowResult && (
        <FlatList
          style={styles.flatList}
          data={result}
          ListEmptyComponent={
            <View style={styles.listEmpty}>
              <Text>Không có kết quả!</Text>
            </View>
          }
          renderItem={({item, index}) => (
            <ItemSearch item={item} index={index} />
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
  },
  searchInput: {
    height: 40,
    width: '95%',
    borderRadius: 10,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
    fontSize: 16,
    color: 'black',
  },
  searchIcon: {
    fontSize: 24,
    color: 'black',
  },
  buttonSearch: {
    position: 'absolute',
    top: 15,
    right: '7%',
  },
  flatList: {
    maxHeight: 150,
    width: '95%',
    borderRadius: 10,
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 10,
    backgroundColor: 'white',
    paddingHorizontal: 10,
  },
});
export default Search;
