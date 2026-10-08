import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

// componente que mostra cada album na tela, recebendo as props dos albuns 
export default function AlbumCard({ titulo, artista, ano, genero, capa, tempo }) {
  return (
    <View style={estilos.card}>
      <Image source={capa} style={estilos.capa} />

      <View style={estilos.informacoes}>
        <Text style={estilos.titulo}>{titulo}</Text>
        <Text style={estilos.artista}>{artista}</Text>
        <Text style={estilos.detalhes}>
          {ano} • {genero} • {tempo}
        </Text>
      </View>
    </View>
  );
}

const estilos = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: "#1e1e1e",
    padding: 12,
    borderRadius: 10,
    marginBottom: 14,
  },
  capa: {
    width: 95,
    height: 95,
    borderRadius: 7,
  },
  informacoes: {
    flex: 1,
    marginLeft: 15,
  },
  titulo: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  artista: {
    color: '#d0d0d0',
    fontSize: 15,
    marginTop: 5,
  },
  detalhes: {
    color: '#8f8f8f',
    fontSize: 13,
    marginTop: 8,
  },
});
