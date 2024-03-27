import React, {useState} from 'react';
import {
  View,
  Text,
  FlatList,
  SafeAreaView,
  TextInput,
  StyleSheet,
  Image,
} from 'react-native';

const products = [
  {
    id: '1',
    name: 'Busem 101 Etek',
    price: 259.9,
    image: require('./components/busem.jpeg'),
  },
  {
    id: '2',
    name: 'Cazibe 102 Kazak',
    price: 329.9,
    image: require('./components/cazibe.jpeg'),
  },
  {
    id: '3',
    name: 'Volumex 103 Elbise',
    price: 159.9,
    image: './components/volumex.jpeg',
  },
  {
    id: '4',
    name: 'Hadise 104 Gömlek',
    price: 759.9,
    image: require('./components/hadise.jpeg'),
  },
  {
    id: '5',
    name: 'Helly 105 Ceket',
    price: 619.9,
    image: require('./components/helly.jpeg'),
  },
  {
    id: '6',
    name: 'Bigdart 106 Bluz',
    price: 859.9,
    image: require('./components/bigdart.png'),
  },
];

const App = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const renderItem = ({item}) => (
    <View style={styles.productContainer}>
      <Image source={{uri: item.image}} style={styles.productImage} />
      <Text style={styles.productName}>{item.name}</Text>
      <Text style={styles.productPrice}>{item.price}</Text>
    </View>
  );

  const handleSearch = query => {
    setSearchQuery(query);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.header}>X SHOP</Text>
        <TextInput
          style={styles.searchBar}
          placeholder="Ara.."
          onChangeText={handleSearch}
          value={searchQuery}
        />
      </View>
      <FlatList
        data={products}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
        numColumns={2}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  headerContainer: {
    margin: 10,
  },
  header: {
    color: 'purple',
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  searchBar: {
    height: 40,
    borderWidth: 1,
    padding: 10,
    borderRadius: 7,
    borderColor: 'gray',
    marginBottom: 3,
  },
  productContainer: {
    flex: 1,
    margin: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    alignItems: 'center',
    borderRadius: 10,
  },
  productImage: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
  productName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  productPrice: {
    fontSize: 14,
  },
});

export default App;
