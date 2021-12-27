import React, {useState, useEffect} from "react";
import { View, TextInput, StyleSheet, Text, SafeAreaView, FlatList } from "react-native";



const Search = () => {

    const [filterdData, setFilterdData] = useState([]);
    const [masterData, setMasterData] = useState([]);
    const [search, setsearch] = useState('');


    useEffect(() => {
        fetchMovie();
        return () => {

        }

    }, [])

    
    const fetchMovie = () => {
        const apiURL = 'https://yts.mx/api/v2/list_movies.json';
        fetch(apiURL)
        .then((response) => response.json())
        .then((responseJson) => {
            setFilterdData(responseJson);
            setMasterData(responseJson);

        }).catch((error) => {
            console.error(error);
        })
    }

    const searchFilter = (text) => {
        const newData = masterData.data.movies.filter(function(item){
            const itemData = item.title.toUpperCase();
            const textData = text.toUpperCase();
            return itemData.indexOf(textData) > -1
        });
        setFilterdData(newData);
    }

    
    return (
        <SafeAreaView>
             <View style={styles.container}>
            <TextInput style={styles.inputButton}
                value={search}
                placeholder="Search"
                underlineColorAndroid="transparent"
                onChangeText={(text) => searchFilter(text)}
            />
            </View>
            <View>
                <FlatList
                    data={filterdData}
                    renderItem={({item}) => <Text style={styles.listItem}>{item.title}</Text>}
                    keyExtractor={(item, index) => index.toString()}
                />
            </View>
            </SafeAreaView>
    )
    
    
}
export default Search;

const styles = StyleSheet.create ({
    container: {
        flex: 1,
    },

    inputButton: {
        height: 40,
        borderWidth: 1,
        paddingLeft: 20,
        margin: 10,
        borderColor: '#009688',
        backgroundColor: '#fff',
    },
});

