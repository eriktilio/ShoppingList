import React, {useState} from 'react';
import {FlatList, SafeAreaView, StyleSheet, View} from 'react-native';
import AddItem, {IItem} from './src/components/AddItem';
import Item from './src/components/Item';
import MySVG from './src/components/MySVG';
import TotalPanel from './src/components/TotalPanel';
import calculateTotal from './src/utils/calculateTotal';

const App = () => {
  const [shoppingList, setShoppingList] = useState<IItem[]>([]);

  // Função para excluir um item da lista de compras
  const deleteItem = (itemToRemove: IItem) => {
    setShoppingList(prevList => prevList.filter(item => item !== itemToRemove));
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.contentWrapper}>
        <View style={styles.flatListContainer}>
          {shoppingList.length === 0 ? (
            <MySVG />
          ) : (
            <View style={styles.flatListContainer}>
              <FlatList
                data={shoppingList}
                keyExtractor={(item, index) => `${item.item}-${index}`}
                renderItem={({item}) => (
                  <Item
                    item={item.item}
                    quantity={item.quantity}
                    price={item.price}
                    onDelete={() => deleteItem(item)}
                  />
                )}
              />
            </View>
          )}
        </View>
        <TotalPanel title={calculateTotal(shoppingList)} />
        <AddItem
          setShoppingList={setShoppingList}
          shoppingList={shoppingList}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  contentWrapper: {
    flex: 1,
    padding: 20,
  },
  flatListContainer: {
    flex: 1,
    maxHeight: '100%',
  },
});

export default App;
