import { FlatList, StyleSheet, Text, View } from "react-native";
import Card from "./src/Components/Card/Card";
import Header from "./src/Components/Header/Header";
export default function App() {
  const data = [
    {
      id: "1",
      nome: "Lucas Silva",
      descricao: "Mais um dia de muitos bugs :)",
      imgperfil: "https://sujeitoprogramador.com/instareact/fotoPerfil1.png",
      imgPublicacao: "https://sujeitoprogramador.com/instareact/foto1.png",
      likeada: true,
      likers: 1,
    },
    {
      id: "2",
      nome: "Matheus",
      descricao: "Isso sim é ser raiz!!!!!",
      imgperfil: "https://sujeitoprogramador.com/instareact/fotoPerfil2.png",
      imgPublicacao: "https://sujeitoprogramador.com/instareact/foto2.png",
      likeada: false,
      likers: 0,
    },
    {
      id: "3",
      nome: "Jose Augusto",
      descricao:
        "Bora trabalhar, hoje estou começando em um projeto novo aqui no sujeito, desde o backend ao frontend",
      imgperfil: "https://sujeitoprogramador.com/instareact/fotoPerfil3.png",
      imgPublicacao: "https://sujeitoprogramador.com/instareact/foto3.png",
      likeada: true,
      likers: 3,
    },
    {
      id: "4",
      nome: "Gustavo Henrique",
      descricao: "Isso sim que é TI!",
      imgperfil: "https://sujeitoprogramador.com/instareact/fotoPerfil1.png",
      imgPublicacao: "https://sujeitoprogramador.com/instareact/foto4.png",
      likeada: true,
      likers: 1,
    },
    {
      id: "5",
      nome: "Guilherme",
      descricao: "Boa tarde galera do insta...",
      imgperfil: "https://sujeitoprogramador.com/instareact/fotoPerfil2.png",
      imgPublicacao: "https://sujeitoprogramador.com/instareact/foto5.png",
      likeada: true,
      likers: 32,
    },
  ];
  return (
    <View style={styles.container}>
      <Header />
      <FlatList
        data={data}
        renderItem={({ item }) => <Card item={item} />}
        keyExtractor={(data) => data.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
