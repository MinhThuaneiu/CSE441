import React, { useState } from 'react';
import Product from './Products/Products';
import Add from './Products/Product_Add';
import Search from './Products/Product_Search';
import Product_Detail from './Products/Product_Detail';
import { BottomNavigation, Icon, Button } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';


const App = () => {
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    {key: 'productList', title: 'Products', focusedIcon: 'bell'},
    {key: 'addProduct', title: 'Add Product', focusedIcon: 'heart'},
    {key: 'searchProduct', title: 'Search Product', focusedIcon: 'heart'},
    {key: 'productDetail', title: 'Detail', focusedIcon: 'heart'},
  ]);

  const renderScreen = BottomNavigation.SceneMap({
    productList : Product,
    addProduct: Add,
    searchProduct: Search,
    productDetail: Product_Detail,
  });
  return (
    
  <SafeAreaProvider>
    <BottomNavigation 
    navigationState={{index, routes}}
    onIndexChange={setIndex}
    renderScene={renderScreen}
    />
  </SafeAreaProvider>
  );
};

export default App;