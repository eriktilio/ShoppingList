import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import formatQuantity from '../utils/formatQuantity';
import {IItem} from './AddItem';

const Item: React.FC<IItem & {onDelete: () => void}> = ({
  item,
  quantity,
  price,
  onDelete,
}) => {
  return (
    <TouchableOpacity onPress={onDelete}>
      <View style={styles.item}>
        <Text style={styles.text}>{quantity}x</Text>
        <Text style={styles.text}>{item}</Text>
        <Text style={styles.text}>{formatQuantity(price)}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  item: {
    paddingVertical: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0, 0, 0, 0.2)',
  },
  text: {
    color: '#000',
    fontWeight: '500',
  },
});

export default Item;
