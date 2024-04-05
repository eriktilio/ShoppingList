import React, {useState} from 'react';
import {FlatList, SafeAreaView, StyleSheet, View} from 'react-native';
import AddItem, {IItem} from './src/components/AddItem';
import Header from './src/components/Header';
import Item from './src/components/Item';

// const mockShoppingList = [
//   {item: 'Maçãs', quantity: '5'},
//   {item: 'Bananas', quantity: '3'},
//   {item: 'Leite', quantity: '2'},
//   {item: 'Pão', quantity: '1'},
//   {item: 'Ovos', quantity: '12'},
//   {item: 'Queijo', quantity: '1'},
//   {item: 'Iogurte', quantity: '4'},
//   {item: 'Cereal', quantity: '1'},
//   {item: 'Café', quantity: '1'},
//   {item: 'Arroz', quantity: '2'},
//   {item: 'Feijão', quantity: '2'},
//   {item: 'Carne', quantity: '3'},
//   {item: 'Peixe', quantity: '2'},
//   {item: 'Frango', quantity: '2'},
//   {item: 'Batatas', quantity: '3'},
//   {item: 'Cenouras', quantity: '6'},
//   {item: 'Tomates', quantity: '4'},
//   {item: 'Alface', quantity: '1'},
//   {item: 'Cebolas', quantity: '3'},
//   {item: 'Pimentões', quantity: '2'},
// ];

const App = () => {
  const [shoppingList, setShoppingList] = useState<IItem[]>([]);

  return (
    <SafeAreaView style={styles.container}>
      <Header title="Lista de Compras" />
      <View style={styles.contentWrapper}>
        <View style={styles.flatListContainer}>
          <FlatList
            data={shoppingList}
            keyExtractor={(item, index) => `${item.item}-${index}`}
            renderItem={({item}) => (
              <Item item={item.item} quantity={item.quantity} />
            )}
          />
        </View>
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
    backgroundColor: '#e8e7e3',
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
