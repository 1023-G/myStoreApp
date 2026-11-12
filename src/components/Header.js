import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.logo}>✨ AURA BOUTIQUE</Text>
      <Text style={styles.subtitulo}>Moda, Ropa & Accesorios Exclusivos</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#1E1B18',
    paddingVertical: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: { fontSize: 20, fontWeight: 'bold', color: '#FFFFFF', letterSpacing: 1.5 },
  subtitulo: { fontSize: 11, color: '#D4A373', marginTop: 3, fontWeight: '500' },
});
