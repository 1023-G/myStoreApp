import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function NavBar({ vistaActual, setVistaActual }) {
  return (
    <View style={styles.navbar}>
      <TouchableOpacity 
        style={[styles.btnNav, vistaActual === 'Inicio' && styles.btnActivo]} 
        onPress={() => setVistaActual('Inicio')}
      >
        <Text style={[styles.textoNav, vistaActual === 'Inicio' && styles.textoActivo]}>
          👗 Catálogo
        </Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={[styles.btnNav, vistaActual === 'Ofertas' && styles.btnActivo]} 
        onPress={() => setVistaActual('Ofertas')}
      >
        <Text style={[styles.textoNav, vistaActual === 'Ofertas' && styles.textoActivo]}>
          🏷️ Rebajas de Temporada
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  navbar: {
    flexDirection: 'row',
    backgroundColor: '#2A2521',
    justifyContent: 'space-around',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#3D352E',
  },
  btnNav: { paddingVertical: 6, paddingHorizontal: 18, borderRadius: 20 },
  btnActivo: { backgroundColor: '#D4A373' },
  textoNav: { color: '#C5BDB5', fontSize: 13, fontWeight: '600' },
  textoActivo: { color: '#1E1B18', fontWeight: 'bold' },
});
