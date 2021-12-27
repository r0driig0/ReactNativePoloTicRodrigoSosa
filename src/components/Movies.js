
import axios from 'axios';
import React, { useState }from 'react';
import { StyleSheet, Text, View, TextInput, ScrollView, Image, Button, Modal, TouchableHighlight } from 'react-native';




function Movies() {

  const apiurl = 'http://www.omdbapi.com/?apikey=dfe6d885';

  const [state, setState] = useState({
    s: '',
    results: [],
    selected: {}
  });


  //configuracion search con AXIOS
  const search = () => {
    axios(apiurl + "&s=" + state.s).then(({ data }) => {
      let results = data.Search;
      setState(prevState => {
        return { ...prevState, results: results } 
      })
    })
  }

  const openPopup = id => {
    axios(apiurl + "&i=" + id).then(({ data }) => {
      let result = data;

      setState(prevState => {
        return { ...prevState, selected: result }
      });
    });
  }
    
  
  //configuracion de la busqueda con teclado
  return (
    <View style={styles.container}>
      <Text style={styles.title}>MOVIES</Text>
      <TextInput 
      style={styles.searchbox} placeholder='Search'  onChangeText={text => setState(prevState => {return { ...prevState, s: text}
      })}
      onSubmitEditing={search}
      value={state.s}
      
      />

      <ScrollView style={styles.results}>
        {state.results.map(result => (
          <TouchableHighlight key={result.imdbID} onPress={() => openPopup(result.imdbID)}>
            <View style={styles.result}>
              <Image style={styles.image} resizeMode='cover' style={{width: 200, height: 300, }}  source={{ uri: result.Poster }} />
              <Text style={styles.heading}>{result.Title}</Text>
            </View>
          </TouchableHighlight>
        ))}


      </ScrollView>
      <Modal visible={(typeof state.selected.Title != "undefined")} animationType='fade' transparent={false}>
          <Text>{state.selected.Title}</Text>
          <Image style={styles.image} resizeMode='cover' style={{width: 300, height: 500, }}  source={{ uri: state.selected.Poster }} />
          <Text>{state.selected.Actors}</Text>
          <Text>{state.selected.Plot}</Text>
          <Button title='Close' onPress={() => setState(prevState => {return { ...prevState, selected: {} }})} />
      </Modal>


    </View>
  )
}

export default Movies;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#323232',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 40,
    paddingHorizontal: 20
  },

  title: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,

  },

  searchbox: {
    fontSize: 20,
    fontWeight: 'bold',
    padding: 20,
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: 10,
    marginBottom: 40,
    
  },

  image: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  heading: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    padding: 20,
    backgroundColor: '#444'
  },

  result: {
    flex: 1,
    width: '100%',
    marginBottom: 20,
    
  },

  results: {
    flex: 1,
    width: '100%',
    height: '100%',
  }
});
