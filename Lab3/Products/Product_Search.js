import {
  Alert,
  TextInput,
  View,
  SafeAreaView,
  Text,
  Button,
  FlatList,
} from 'react-native';
import styles from './Style_Product';
import {useState} from 'react';
import {Avatar, Card } from 'react-native-paper';

function Search() {
  const [data, setData] = useState([]);
  const [value, setValue] = useState([]);
  let filePath = 'https://dummyjson.com/products';

  const searchProduct = () => {
    if (value != '')
      filePath = 'https://dummyjson.com/products/search?q=' + value;
    fetch(filePath)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        return response.json();
      })
      .then(d => {
        setData(d.products);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  };
  return (
    <SafeAreaView>
      <Text style={styles.titleSearch}>Search Products</Text>
      <TextInput placeholder="Enter something" />
      <Button title="SEARCH" onPress={searchProduct} />

      <FlatList
        data={data}
        renderItem={({item}) => {
          return (
            <View>
              <Card>
                <Card.Title title='Product Detail' />
                <Card.Cover source={{uri: item.thumbnail}} />
                <Card.Content>
                  <Text style={styles.title}>{item.title}</Text>
                  <Text>Description: {item.description}</Text>
                  <Text>Price: {item.price}</Text>
                  <Text>Discount: {item.discountPercentage}</Text>
                  <Text>Rating: {item.rating}</Text>
                  <Text>Stock: {item.stock}</Text>
                  <Text>Brand: {item.brand}</Text>
                  <Text>Category: {item.category}</Text>
                </Card.Content>
              </Card>
            </View>
          );
        }}
      />
    </SafeAreaView>
  );
}

export default Search;