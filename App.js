import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <>
    <View style={styles.header}>
      <Text style={styles.headerText}>WEEK 1</Text>
    </View>
    <View style={styles.container}>
      <Text style={styles.containerText}>110819009</Text>
      <Text>方 雁</Text>
      <StatusBar style="auto" />
    </View>
    </>
    
  );
}

const styles = StyleSheet.create({
  header: {
    paddingTop: 30,
    flex: 1,
    backgroundColor: '#696773',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText:{
    fontWeight: 'bold',
    fontSize: 24,
    color: '#EFF1F3',
  },
  container: {
    flex: 10,
    backgroundColor: '#EFF1F3',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerText:{
    color: '#272727',
  }
});
