import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
interface Props {
  title: string;
}
const TotalPanel: React.FC<Props> = ({title}) => {
  return (
    <View style={styles.panel}>
      <Text style={styles.panelText}>Total</Text>
      <Text style={styles.panelText}>{title}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  panel: {
    paddingVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  panelText: {
    fontSize: 20,
    color: '#000',
    fontWeight: '500',
  },
});
export default TotalPanel;
