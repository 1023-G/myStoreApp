import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Footer() {
  return (
    <View style={styles.footer}>
      <Text style={styles.texto}>Aura Boutique © 2026 — Moda & Accesorios. Todos los derechos reservados</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  footer: { backgroundColor: '#1E1B18', paddingVertical: 14, alignItems: 'center', marginTop: 10 },
  texto: { color: '#A39B93', fontSize: 10 },
});
