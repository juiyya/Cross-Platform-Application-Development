import React from "react";
import { FlatList, StyleSheet, Text, View, Linking } from "react-native"; //usando Linking para o link do spotify

import AlbumCard from "./components/AlbumCard";

// lista com info dos albuns
const albuns = [
  {
    id: "1",
    titulo: "Richard D. James Album",
    artista: "Aphex Twin",
    ano: "1996",
    tempo: "32min 51s",
    genero: "IDM",
    capa: require("./assets/albums/Richard_D_James_Album.jpg")
  },
  {
    id: "2",
    titulo: "Goo",
    artista: "Sonic Youth",
    ano: "1990",
    tempo: "49min 23s",
    genero: "Noise Rock",
    capa: require("./assets/albums/Sonicyouthgoo.png")
  },
  {
    id: "3",
    titulo: "Kids See Ghosts",
    artista: "Kanye West, Kid Cudi",
    ano: "2018",
    tempo: "23min 50s",
    genero: "Hip-Hop",
    capa: require("./assets/albums/Kids_See_Ghosts_Cover.png")
  },
  {
    id: "7",
    titulo: "Debut",
    artista: "Björk",
    ano: "1993",
    tempo: "48min 31s",
    genero: "Eletrônico / Alternativo",
    capa: require("./assets/albums/debut.png"),
  },
  {
    id: "4",
    titulo: "But You Caint Use My Phone",
    artista: "Erykah Badu",
    ano: "2015",
    tempo: "36min 11s",
    genero: "R&B / Soul",
    capa: require("./assets/albums/but-you-caint-use-my-phone.jpg"),
  },
  {
    id: "5",
    titulo: "A Paixão Tem Memória",
    artista: "Alcione",
    ano: "2001",
    tempo: "58min 36s",
    genero: "Samba / MPB",
    capa: require("./assets/albums/a-paixao-tem-memoria.jpg"),
  },
  {
    id: "6",
    titulo: "The Velvet Underground & Nico",
    artista: "The Velvet Underground & Nico",
    ano: "1967",
    tempo: "48min 57s",
    genero: "Rock",
    capa: require("./assets/albums/the-velvet-underground-and-nico.jpg"),
  },
  {
    id: "12",
    titulo: "Follow the Leader",
    artista: "Korn",
    ano: "1998",
    tempo: "1h 7min",
    genero: "Nu Metal",
    capa: require("./assets/albums/follow-the-leader.png"),
  },
  {
    id: "8",
    titulo: "Nothing's About to Happen to Me",
    artista: "Mitski",
    ano: "2026",
    tempo: "34min 27s",
    genero: "Americana / Art Pop",
    capa: require("./assets/albums/nothings-about-to-happen-to-me.jpg"),
  },
  {
    id: "9",
    titulo: "Four-Calendar Café",
    artista: "Cocteau Twins",
    ano: "1993",
    tempo: "41min 7s",
    genero: "Dream Pop",
    capa: require("./assets/albums/four-calendar-cafe.jpg"),
  },
  {
    id: "10",
    titulo: "Friday Night Funkin, Vol. 1 (Original Game Soundtrack)",
    artista: "Funkin' Sound Team",
    ano: "2020",
    tempo: "51min 56s",
    genero: "Eletrônico / Hip Hop",
    capa: require("./assets/albums/funkin-sound-team.png"),
  },
  {
    id: "11",
    titulo: "Gal Costa",
    artista: "Gal Costa",
    ano: "1969",
    tempo: "35min 17s",
    genero: "MPB / Tropicália",
    capa: require("./assets/albums/gal-costa.jpg"),
  },
  {
    id: "13",
    titulo: "The Virgin Suicides",
    artista: "Air",
    ano: "2000",
    tempo: "40min 32s",
    genero: "Pop",
    capa: require("./assets/albums/playground-love.png"), // <3
  },

];

export default function App() {
  const abrirSpotify = () => {
    Linking.openURL(
      // importa Linking para abrir o link do spotify, no inicio do codigo
      "https://open.spotify.com/user/22sptkxgu2vxa2pknjgxl7ziy?si=3a61a96c41b84ada",
    );
  };

  return (
    <View style={estilos.container}>
      <Text style={estilos.titulo}>Meus Álbuns</Text>
      <Text style={estilos.subtitulo}>
        Logo abaixo segue a lista dos meus álbuns favoritos nos últimos tempos!
      </Text>

      <Text style={estilos.textoSpotify}>
        Caso tenha interesse em ouvir esses álbuns, acesse o meu{" "}
        <Text style={estilos.linkSpotify} onPress={abrirSpotify}>
          Spotify
        </Text>
        !
      </Text>

      <FlatList
        data={albuns}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <AlbumCard
            titulo={item.titulo}
            artista={item.artista}
            ano={item.ano}
            genero={item.genero}
            tempo={item.tempo}
            capa={item.capa}
          />
        )}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={estilos.lista}
      />
    </View>
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
    paddingTop: 20,
    paddingHorizontal: 20,
  },

  titulo: {
    color: "#ffffff",
    fontSize: 30,
    fontWeight: "bold",
  },

  subtitulo: {
    color: "#aaaaaa",
    fontSize: 15,
    marginTop: 5,
    marginBottom: 10,
  },

  textoSpotify: {
    color: "#aaaaaa",
    fontSize: 14,
    lineHeight: 20,
    marginBottom: 22,
  },

  linkSpotify: {
    color: "#1db954",
    fontWeight: "bold",
    textDecorationLine: "underline",
  },

  lista: {
    paddingBottom: 20,
  },
});
