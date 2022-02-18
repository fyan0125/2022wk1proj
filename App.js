import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";

export default function App() {
  return (
    <>
      <View style={styles.header}>
        <Text style={styles.headerText}>WEEK 1</Text>
      </View>
      <View style={styles.container}>
        <Image style={styles.image} source={require("./assets/IMG_8747.jpg")} />
        <Text style={styles.containerText}>110819009</Text>
        <Text style={styles.containerText}>方 雁</Text>
        <StatusBar style="auto" />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  header: {
    paddingTop: 30,
    flex: 1,
    backgroundColor: "#6B6054",
    alignItems: "center",
    justifyContent: "center",
  },
  headerText: {
    fontWeight: "bold",
    fontSize: 24,
    color: "#D5ECD4",
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 100,
    borderWidth: 5,
    marginBottom: 30,
    borderColor: "#A1B0AB",
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    flex: 10,
    backgroundColor: "#D5ECD4",
    alignItems: "center",
    justifyContent: "center",
  },
  containerText: {
    color: "#6B6054",
  },
});
