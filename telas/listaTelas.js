import { useEffect, useState } from 'react';
import {
    ActivityIndicator, FlatList, Image, StyleSheet, Text, TouchableOpacity, View,
} from 'react-native';

export default function ListaTelas({ navigation }) {
    // dados: lista começa vazia
    const [dados, setDados] = useState([]);
    // carregando: true enquanto a requisição não termina
    const [carregando, setCarregando] = useState(true);
    // erro: guarda a mensagem se algo der errado
    const [erro, setErro] = useState(null);

    useEffect(() => {
        async function buscarSeries() {
            try {
                const resposta = await fetch('https://api.tvmaze.com/shows');
                // fetch só dá erro se a internet cair
                if (!resposta.ok) throw new Error(`HTTP ${resposta.status}`);

                const json = await resposta.json(); // transforma em json
                setDados(json); // guarda no estado, e a tela é redesenhada
            } catch (e) {
                setErro(e.message);
            } finally {
                setCarregando(false); // roda com sucesso ou com erro
            }
        }

        buscarSeries();
    }, []);

    // bolinha girando
    if (carregando) return <ActivityIndicator style={styles.centro} size="large" />;
    // mostra mensagem em vez da lista 
    if (erro) return <Text style={styles.erro}>Erro ao carregar séries: {erro}</Text>;

    return (
        <FlatList
            data={dados}
            keyExtractor={(item) => String(item.id)}
            renderItem={({ item }) => (
                <TouchableOpacity
                    style={styles.item}
                    onPress={() => navigation.navigate('Detalhe', { id: item.id, nome: item.name })}>
                    {item.image?.medium ? (
                        <Image source={{ uri: item.image.medium }} style={styles.foto} />
                    ) : (
                        // mostra um quadrado cinza caso semFoto
                        <View style={[styles.foto, styles.semFoto]} />
                    )}
                    <Text style={styles.nome}>{item.name}</Text>
                </TouchableOpacity>
            )}
        />
    );
}

const styles = StyleSheet.create({
    centro: { flex: 1, justifyContent: 'center' },
    erro: { padding: 16, color: 'crimson', textAlign: 'center' },
    item: { flexDirection: 'row', alignItems: 'center', padding: 12 },
    foto: { width: 60, height: 85, borderRadius: 4 },
    semFoto: { backgroundColor: '#ccc' },
    nome: { flex: 1, marginLeft: 12, fontSize: 16, fontWeight: 'bold' }, // flex: 1 ocupa o espaço que sobra
});