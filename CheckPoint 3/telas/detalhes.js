import { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, StyleSheet, Text } from 'react-native';

export default function Detalhes({ route }) {
    const { id, nome } = route.params;
    const [episodios, setEpisodios] = useState([]);
    const [carregando, setCarregando] = useState(true);
    const [erro, setErro] = useState(null);
    // Roda quando a tela abre e se o id mudar
    useEffect(() => {
        async function buscarEpisodios() {
            try {
                // monta a url com o id da série
                const resposta = await fetch(`https://api.tvmaze.com/shows/${id}/episodes`);
                if (!resposta.ok) throw new Error(`HTTP ${resposta.status}`);

                const json = await resposta.json();
                setEpisodios(json);
            } catch (e) {
                setErro(e.message);
            } finally {
                setCarregando(false);
            }
        }

        buscarEpisodios();
    }, [id]);

    if (carregando) return <ActivityIndicator style={styles.centro} size="large" />;
    if (erro) return <Text style={styles.erro}>Erro ao carregar episódios: {erro}</Text>;

    return (
        <FlatList
            data={episodios}
            keyExtractor={(item) => String(item.id)}
            // o nome no topo da lista
            ListHeaderComponent={<Text style={styles.titulo}>{nome}</Text>}

            ListEmptyComponent={<Text style={styles.erro}>Nenhum episódio encontrado.</Text>}
            renderItem={({ item }) => (
                <Text style={styles.episodio}>
                    T{item.season} E{item.number ?? '-'} · {item.name}
                </Text>
            )}
        />
    );
}

const styles = StyleSheet.create({
    centro: { flex: 1, justifyContent: 'center' },
    erro: { padding: 16, color: 'crimson', textAlign: 'center' },
    titulo: { fontSize: 22, fontWeight: 'bold', padding: 16 },
    episodio: { paddingHorizontal: 16, paddingVertical: 8, borderBottomWidth: StyleSheet.hairlineWidth },
});