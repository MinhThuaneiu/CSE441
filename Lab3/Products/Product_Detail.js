import {
    View,
    Text,
  } from 'react-native';
  import styles from './Style_Product';
  import {useEffect, useState} from 'react';
  import {Avatar, Card, Button, Title} from 'react-native-paper';

  function Product_Detail(){
    const[data, setData] = useState([])
    const filePath = 'https://dummyjson.com/products/2';

    useEffect(() => {
        fetch(filePath)
            .then((response) => {
                if(!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then((d) => {
                setData(d);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    });

    return (
        <View>
          <Card>
            <Card title='Product Detail' />
            <Card.Cover source={{uri: data.thumbnail}} />
            <Card.Content>
              <Text style={styles.title}>{data.title}</Text>
              <Text>Description: {data.description}</Text>
              <Text>Price: {data.price}</Text>
              <Text>Discount: {data.discountPercentage}</Text>
              <Text>Rating: {data.rating}</Text>
              <Text>Stock: {data.stock}</Text>
              <Text>Brand: {data.brand}</Text>
              <Text>Category: {data.category}</Text>
            </Card.Content>
            <Card.Actions>
                <Button>Delete</Button>
                <Button>Cancel</Button>
            </Card.Actions>
          </Card>
        </View>
      );
  }

  export default Product_Detail;