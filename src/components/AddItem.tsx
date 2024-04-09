import React, {useState} from 'react';
import {
  Alert,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

export interface IItem {
  item: string;
  quantity: string;
  price: string;
}

interface Props {
  setShoppingList: React.Dispatch<React.SetStateAction<IItem[]>>;
  shoppingList: IItem[];
}

const AddItem: React.FC<Props> = ({shoppingList, setShoppingList}) => {
  const [item, setItem] = useState('');
  const [quantity, setQuantity] = useState('');
  const [price, setPrice] = useState('');

  const addItem = () => {
    if (!item) {
      Alert.alert('Sem items!', 'Adicione pelo menos um item');
    } else {
      setShoppingList([
        ...shoppingList,
        {
          item,
          quantity: quantity || '1',
          price: price || '0',
        },
      ]);
      setItem('');
      setQuantity('');
      setPrice('');
    }
  };

  return (
    <View>
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Nome do item"
          placeholderTextColor={'grey'}
          value={item}
          maxLength={25}
          onChangeText={text => setItem(text)}
        />
        <View style={styles.inputs}>
          <TextInput
            style={styles.quantityInput}
            placeholder="R$ 0,00"
            placeholderTextColor={'grey'}
            keyboardType="numeric"
            value={price}
            onChangeText={p => {
              // Remove todos os pontos
              const withoutDots = p.replace(/\./g, '');
              // Remove todas as vírgulas exceto a primeira
              const withSingleComma = withoutDots.replace(
                /,/g,
                (match, offset, original) =>
                  offset === original.indexOf(',') ? match : '',
              );
              // Atualiza o estado com o valor formatado
              setPrice(withSingleComma);
            }}
          />
          <TextInput
            style={styles.quantityInput}
            placeholder="1"
            placeholderTextColor={'grey'}
            keyboardType="numeric"
            value={quantity}
            onChangeText={q => {
              // Remove caracteres não numéricos, exceto o ponto
              const sanitizedInput = q.replace(/[^\d.]/g, '');
              // Separa em partes usando o ponto
              const parts = sanitizedInput.split('.');
              // Usa apenas a parte inteira (antes do ponto)
              const integerPart = parts[0];
              // Atualiza o estado com o valor inteiro
              setQuantity(integerPart);
            }}
          />
        </View>
        <TouchableOpacity style={styles.addItemButton} onPress={addItem}>
          <Text style={styles.buttonText}>Adicionar item</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  form: {
    marginTop: 10,
  },
  input: {
    padding: 15,
    color: '#000',
    borderColor: '#eb8634',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 20,
  },
  inputs: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 20,
  },
  quantityInput: {
    flex: 1,
    padding: 15,
    color: '#000',
    borderColor: '#eb8634',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 20,
  },
  addItemButton: {
    backgroundColor: '#eb8634',
    paddingVertical: 20,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: 'rgb(255, 255, 255)',
    textTransform: 'uppercase',
    fontWeight: '500',
  },
});

export default AddItem;
