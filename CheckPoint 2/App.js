import { useState } from 'react';
import { View, Text, TextInput, FlatList, StyleSheet, Pressable } from 'react-native';

export default function App() {
  const [item, setItem] = useState('');
  const [lista, setLista] = useState([]);

  function adicionarItem() {
    const novoItem = item.trim();
    if (novoItem === '') return;
    setLista([...lista, novoItem]);
    setItem('');
  }

  function excluirItem(index) {
    setLista(lista.filter((_, i) => i !== index));
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Lista de Compras</Text>

      <View style={styles.areaAdicionar}>
        <TextInput
          style={styles.input}
          placeholder="Digite um item"
          placeholderTextColor="#888"
          value={item}
          onChangeText={setItem}
        />
        <Pressable style={styles.botaoAdicionar} onPress={adicionarItem}>
          <Text style={styles.textoBotao}>Adicionar</Text>
        </Pressable>
      </View>

      <FlatList
        data={lista}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <View style={styles.item}>
            <Text style={styles.textoItem}> ➝ {item}</Text>
            <Pressable style={styles.botaoExcluir} onPress={() => excluirItem(index)}>
              <Text style={styles.textoBotao}>Excluir</Text>
            </Pressable>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#363636',
    alignItems: 'center',
    paddingTop: 80
  },
  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 25,
    color: '#fff'
  },
  areaAdicionar: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10
  },
  input: {
    width: 210,
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 10,
    fontSize: 16,
    marginRight: 8
  },
  botaoAdicionar: {
    backgroundColor: '#1469b8',
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderRadius: 8
  },
  botaoExcluir: {
    backgroundColor: '#bd1919',
    paddingVertical: 5,
    paddingHorizontal: 8,
    borderRadius: 5,
    marginLeft: 10
  },
  textoBotao: {
    color: '#fff',
    fontSize: 13
  },
  item: {
    width: 300,
    backgroundColor: '#444',
    padding: 10,
    marginTop: 8,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  textoItem: {
    fontSize: 17,
    color: '#fff',
    flex: 1
  }
});