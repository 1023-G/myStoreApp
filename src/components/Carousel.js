import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export default function Carousel() {
  const destacados = [
    {
      id: 'c1',
      nombre: 'Colección Otoño / Invierno',
      badge: 'NUEVA TEMPORADA',
      uri: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=600',
    },
    {
      id: 'c2',
      nombre: 'Bolsos & Marroquinería',
      badge: 'ACCESORIOS TOP',
      uri: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=600',
    },
    {
      id: 'c3',
      nombre: 'Estilo Urbano & Casual',
      badge: 'TENDENCIA',
      uri: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600',
    },
  ];

  return (
    <View style={styles.contenedor}>
      <ScrollView horizontal pagingEnabled showsHorizontalScrollIndicator={false}>
        {destacados.map((item) => (
          <View key={item.id} style={styles.slide}>
            <Image source={{ uri: item.uri }} style={styles.imagen} />
            <View style={styles.overlay}>
              <Text style={styles.badge}>{item.badge}</Text>
              <Text style={styles.tituloSlide}>{item.nombre}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  contenedor: { height: 190, marginVertical: 12 },
  slide: { width: width - 32, marginHorizontal: 16, height: 190, borderRadius: 14, overflow: 'hidden', backgroundColor: '#1E1B18' },
  imagen: { width: '100%', height: '100%', opacity: 0.78 },
  overlay: { position: 'absolute', bottom: 16, left: 16, right: 16 },
  badge: { backgroundColor: '#D4A373', color: '#1E1B18', fontSize: 10, fontWeight: 'bold', paddingHorizontal: 8, paddingVertical: 3, borderRadius: 4, alignSelf: 'flex-start' },
  tituloSlide: { color: '#FFF', fontSize: 20, fontWeight: 'bold', marginTop: 5 },
});
