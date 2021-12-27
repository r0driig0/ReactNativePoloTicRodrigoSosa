import React, { Component } from "react";
import { StyleSheet, View, Text, FlatList, Image, Dimensions, ActivityIndicator } from "react-native";





export default class Movies extends React.Component {

    const [filterdData, setFilterdData] = useState([]);
    const [masterData, setMasterData] = useState([]);

    
    constructor({ search }) {
        super({ search });

        this.state = {
            loading: false,
            movies: [],
            url: 'https://yts.mx/api/v2/list_movies.json'
        };
    }


    componentDidMount() {
        this.getMovies()
    }

    getMovies = () => {
        this.setState({ loading: true });

        fetch(this.state.url)
            .then(response => response.json())
            .then(response => {
                setFilterdData(responseJson);
                setMasterData(responseJson);

                this.setState({
                    url: res.data.movie_count > res.data.limit ? res.data.next_page : null,
                    movies: res.data.movies,
                    loading: false
                });
            })
            .catch(error => {
                console.error(error);
            });
    }

    render() {
        if (this.state.loading) {
            return (
                <View style={styles.spinner}>
                    <ActivityIndicator size="large" color="#0000ff" />
                </View>
            )
        }
        return (
            <View style={styles.movieContainer}>
                <FlatList 
                    data = {this.state.movies}
                    renderItem={({ item }) => 
                    <>
                    <View style={styles.movieGrid}>
                        <Text style={styles.movieTitle}>{item.title}</Text>
                    </View>
                    </>
                    
                }
                numColumns={2}
                keyExtractor={item => item.id.toString()}
                />
            </View>
        );  
    }
}


const styles = StyleSheet.create({
    movieContainer: {
        backgroundColor: '#323232',
    },

    spinner: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        

    },

    movieGrid: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "center",
    },

    imageMovie: {
        
        width: 180,
        height: 300,
        padding: 10,
        margin: 0,
        borderRadius: 10,
    },

    
});