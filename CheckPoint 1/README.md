# meus álbuns

aplicativo simples em react native e expo para mostrar uma lista dos meus álbuns favoritos. CheckPoint 1 Cross Plataform - FIAP


## como testar o projeto

```bash
npm install
```

```bash
npx expo install react-dom react-native-web
```

inicie o expo e clique W para abrir o localhost
```bash
npx expo start -c
```

o `-c` serve para limpar o cache do projeto.

## organização do projeto

```text
album-list/
├── assets/
│   ├── albums/
│   ├── adaptive-icon.png
│   ├── favicon.png
│   ├── icon.png
│   └── splash-icon.png
├── components/
│   └── AlbumCard.jsx
├── App.js
├── app.json
├── index.js
├── package.json
└── README.md
```

### App.js

o arquivo `App.js` possui:

- o array com os dados dos álbuns;
- o título e os textos da página;
- o link para o spotify;
- a `FlatList`;
- os estilos principais da tela.

### AlbumCard.jsx

o arquivo `components/AlbumCard.jsx` possui o componente responsável por mostrar cada álbum.

ele recebe os dados através de props e apresenta a capa, o título, o artista, o ano, a duração e o gênero musical.

### assets/albums

a pasta `assets/albums` guarda todas as imagens utilizadas como capas dos álbuns.


## requisitos do prof. e componentes utilizados

### View

utilizado para organizar os elementos e criar os containers da interface.

### Text

utilizado para mostrar textos como título, artista, ano, duração e gênero.

### Image

utilizado para mostrar as capas dos álbuns.

### StyleSheet

utilizado para criar e organizar os estilos do aplicativo.

### FlatList

utilizado para percorrer o array de álbuns e mostrar um card para cada item.

### AlbumCard

componente criado para evitar a repetição do mesmo código para todos os álbuns.

### props

utilizadas para enviar os dados de cada álbum do `App.js` para o componente `AlbumCard`.

