import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { Rating } from "react-native-elements";



export default function SecondScreen (){

  const ratingCompleted = (rating: number) => {
    console.log('Rating is: ' + rating);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Rating</Text>
      <Rating
            showRating
            type="star"
            fractions={1}
            startingValue={3.6}
            readonly
            imageSize={40}
            onFinishRating={ratingCompleted}
            style={{ paddingVertical: 20 }}
          />
    </View>
    

  );
}


const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    width: 'auto',
    
  },

  title: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    
  },

  button: {
    fontSize: 30,

  }

 });