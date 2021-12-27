import React from "react";
import { View, Text, StyleSheet, Button, TextInput } from "react-native";
import  Movies  from "../components/Movies";


 export default function HomeScreen ({ navigation }) {
  return (
    <View style={styles.container}>
      
        <Movies />
      
    <Button style={styles.button} title="Rating"  onPress={() => navigation.navigate ('Back Home')} />
      
    </View>
  );
}

 const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
  },
  button: {
    marginTop: 10
   },

  title: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    
  },

  button: {
    fontSize: 30,
    position: 'absolute',
    bottom: 20,
  }

 });
