import React from 'react';
import { StyleSheet, View, Button, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Sala({ route }) {
  const navigation = useNavigation();
  const { scanResult } = route.params || { scanResult: { type: "", data: "" } };

  return (
    <View style={styles.container}>
      <Text>Tipo: {scanResult.type}</Text>
      <Text>Código: {scanResult.data}</Text>
      <Button title="Escanear" onPress={() => navigation.navigate('Camera')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
