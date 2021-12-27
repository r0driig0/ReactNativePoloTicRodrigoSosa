import React from "react";
import AppNavigation from "./routes/AppNavigation";
import { StyleSheet } from "react-native";





export default function App() {
  return (
   <AppNavigation style={styles.container}/>
   );
}

const styles = StyleSheet.create({
  container: {
    color: '#fff',
  }
});
