import React from 'react';
import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity } from 'react-native';

const productosOferta = [
  { id: 'o1', nombre: 'Chaqueta Denim Vintage', desc: 'Mezclilla clásica con botones de bronce. Últimas tallas disponibles.', precioAntiguo: '$185.000 COP', precioOferta: '$109.900 COP', img: 'https://images.unsplash.com/photo-1523205771623-e0faa4d2813d?w=300' },
  { id: 'o2', nombre: 'Bolso Crossbody Pastel', desc: 'Correa ajustable y cierre magnético seguro, ideal para salidas casuales.', precioAntiguo: '$140.000 COP', precioOferta: '$79.900 COP', img: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=300' },
  { id: 'o3', nombre: 'Bufanda de Cachemira', desc: 'Tejido extra suave y abrigador en tonos tierra.', precioAntiguo: '$95.000 COP', precioOferta: '$49.900 COP', img: 'https://images.unsplash.com/photo-1520903920243-00d872a2d1c9?w=300' },
  { id: 'o4', nombre: 'Botines de Gamuza', desc: 'Tacón cómodo de 5 cm con suela antideslizante.', precioAntiguo: '$240.000 COP', precioOferta: '$149.900 COP', img: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=300' },
];

export default function OfertasScreen({ volverInicio }) {
  return (
    <View style={styles.contenedor}>
      <View style={styles.headerOfertas}>
        <Text style={styles.tituloOfertas}>🛍️ Liquidación de Temporada</Text>
        <Text style={styles.subOfertas}>Prendas y accesorios seleccionados con hasta 50% OFF</Text>
      </View>

      <TouchableOpacity style={styles.btnVolver} onPress={volverInicio}>
        <Text style={styles.textoVolver}>← Volver al Catálogo</Text>
      </TouchableOpacity>

      <FlatList
        data={productosOferta}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.cardOferta}>
            <Image source={{ uri: item.img }} style={styles.img} />
            <View style={styles.detalles}>
              <Text style={styles.nombre}>{item.nombre}</Text>
              <Text style={styles.desc}>{item.desc}</Text>
              <View style={styles.preciosRow}>
                <Text style={styles.precioAntiguo}>{item.precioAntiguo}</Text>
                <Text style={styles.precioOferta}>{item.precioOferta}</Text>
              </View>
            </View>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  contenedor: { flex: 1, padding: 16, backgroundColor: '#FDF8F5' },
  headerOfertas: { backgroundColor: '#B5654D', padding: 14, borderRadius: 12, marginBottom: 12 },
  tituloOfertas: { color: '#FFF', fontSize: 18, fontWeight: 'bold', textAlign: 'center' },
  subOfertas: { color: '#FCE8E1', fontSize: 11, textAlign: 'center', marginTop: 3 },
  btnVolver: { paddingVertical: 8, marginBottom: 10 },
  textoVolver: { color: '#8C4A36', fontWeight: 'bold', fontSize: 14 },
  cardOferta: { flexDirection: 'row', backgroundColor: '#FFF', borderRadius: 12, padding: 10, marginBottom: 10, borderWidth: 1, borderColor: '#F3D6CE' },
  img: { width: 74, height: 74, borderRadius: 8, backgroundColor: '#F5F0EB' },
  detalles: { flex: 1, marginLeft: 12, justifyContent: 'center' },
  nombre: { fontSize: 14, fontWeight: 'bold', color: '#1E1B18' },
  desc: { fontSize: 11, color: '#7A7267', marginVertical: 3 },
  preciosRow: { flexDirection: 'row', alignItems: 'center' },
  precioAntiguo: { fontSize: 12, color: '#A39B93', textDecorationLine: 'line-through', marginRight: 8 },
  precioOferta: { fontSize: 15, fontWeight: 'bold', color: '#B5654D' },
});
