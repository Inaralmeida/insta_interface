import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Header from "./src/Components/Header/Header";

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <Text>Em breve um instagram </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
