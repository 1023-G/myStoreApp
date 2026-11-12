import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

const productosModa = [
  { id: '1', nombre: 'Chaqueta de Cuero Clásica', desc: 'Corte biker entallado con cierres metálicos y forro térmico.', precio: '$289.900 COP', img: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=300' },
  { id: '2', nombre: 'Vestido Midi Floral', desc: 'Tela ligera y fresca con estampado primaveral y corte en A.', precio: '$149.900 COP', img: 'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=300' },
  { id: '3', nombre: 'Bolso Tote de Piel', desc: 'Amplio espacio interior con acabados artesanales en tono camel.', precio: '$195.000 COP', img: 'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=300' },
  { id: '4', nombre: 'Gafas de Sol Vintage', desc: 'Montura estilo retro con protección UV400 y estuche rígido.', precio: '$89.900 COP', img: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=300' },
  { id: '5', nombre: 'Sneakers Urbanos Blancos', desc: 'Diseño minimalista con suela acolchada de máxima comodidad.', precio: '$210.000 COP', img: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=300' },
  { id: '6', nombre: 'Reloj Minimalista Dorado', desc: 'Correa de malla de acero inoxidable y resistencia al agua.', precio: '$245.000 COP', img: 'https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=300' },
  { id: '7', nombre: 'Suéter Tejido Oversize', desc: 'Lana suave hipoalergénica en tono crema, ideal para días fríos.', precio: '$125.000 COP', img: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=300' },
  { id: '8', nombre: 'Collar en Capas Baño de Oro', desc: 'Set de cadenas delicadas con dije de perla natural.', precio: '$75.000 COP', img: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=300' },
  { id: '9', nombre: 'Sombrero Fedora de Fieltro', desc: 'Toque elegante con cinta decorativa para complementar tu outfit.', precio: '$85.000 COP', img: 'https://images.unsplash.com/photo-1514327605112-b887c0e61c0a?w=300' },
  { id: '10', nombre: 'Jeans Denim Tiro Alto', desc: 'Algodón orgánico con calce cómodo que estiliza la figura.', precio: '$159.900 COP', img: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=300' },
];

export default function WorkArea() {
  return (
    <View style={styles.contenedor}>
      <Text style={styles.tituloSeccion}>Ropa & Accesorios Destacados</Text>
      {productosModa.map((item) => (
        <View key={item.id} style={styles.card}>
          <Image source={{ uri: item.img }} style={styles.imagenProd} />
          <View style={styles.info}>
            <Text style={styles.nombre}>{item.nombre}</Text>
            <Text style={styles.desc}>{item.desc}</Text>
            <Text style={styles.precio}>{item.precio}</Text>
          </View>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  contenedor: { paddingHorizontal: 16 },
  tituloSeccion: { fontSize: 18, fontWeight: 'bold', color: '#1E1B18', marginVertical: 12 },
  card: { flexDirection: 'row', backgroundColor: '#FFFFFF', borderRadius: 12, padding: 10, marginBottom: 10, borderWidth: 1, borderColor: '#EAE2DC' },
  imagenProd: { width: 78, height: 78, borderRadius: 8, backgroundColor: '#F5F0EB' },
  info: { flex: 1, marginLeft: 12, justifyContent: 'center' },
  nombre: { fontSize: 15, fontWeight: '700', color: '#1E1B18' },
  desc: { fontSize: 12, color: '#7A7267', marginVertical: 3 },
  precio: { fontSize: 15, fontWeight: 'bold', color: '#B5654D' },
});
