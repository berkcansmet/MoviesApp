//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet,ScrollView } from 'react-native';
import PageHeader from '../Components/PageHeader';
import Trend from './Trend';
import Klasik from './Klasik';
import { Container, Content, Icon } from 'native-base';
import { Fonts } from '../Helpers/Fonts';
import axios from 'axios';
import {URL, API_KEY, SORT, SORT2} from '../Helpers/Config';


class Home extends Component {

    constructor(props){
        super(props);
        this.state = {
            movies: null,
            available: true,
            movies2: null,
            
        }
       
        this.getRequestAxios()
        this.getRequestAxios2()
    };

    async getRequestAxios(){
        try{
            await axios.get(URL+'discover/movie?sort_by='+SORT+'&api_key='+API_KEY).then(async(res) => {
               this.setState({
                   movies: res.data.results
               })
               console.log("State", this.state.movies)
            })
            .catch(async(err) => {
                console.warn(err);
            })
        
            
        } catch (error) {
            console.error(error);
        }

    }
    
    renderMovies = () => {
        var Movies = this.state.movies;
        if ( Movies ) {
            return Movies.map((data,index) => {
                return (
                    <Trend TrendId={data.id} title={data.original_title} image={data.poster_path} kaynak={data.overview} imdb={data.vote_average} yil={data.release_date} backimg={data.backdrop_path} />
                    
                )
            })
        }
       
    };

    async getRequestAxios2(){
        try{
            await axios.get(URL+'discover/tv?sort_by='+SORT+'&api_key='+API_KEY).then(async(res) => {
               this.setState({
                   movies2: res.data.results
               })
               console.log("State", this.state.movies2)
            })
            .catch(async(err) => {
                console.warn(err);
            })
        
            
        } catch (error) {
            console.error(error);
        }

    }

    renderKlasik = () => {
        var Movies2 = this.state.movies2;
        if ( Movies2 ) {
            return Movies2.map((data,index) => {
                return (
                    <Klasik TrendId={data.id} title={data.original_name} image={data.poster_path} kaynak={data.overview} imdb={data.vote_average}/>
                    
                )
            })
        }
    }
    
    render() {
        return (
            <Container style={styles.container}>
              <Content>  
                <PageHeader isAvailable={(bool) => this.setState({ available: bool})} 
                             />
                { this.state.available == true && (
                    <View>
                
                <ScrollView horizontal={true} showHorizontalIndicator={false}>
                  {this.renderMovies()}

                </ScrollView>
                    <Text style={styles.Text}>Klasikler</Text>
                <ScrollView horizontal={true} showHorizontalIndicator={false}>
                    {this.renderKlasik()}
                 </ScrollView>   
                </View>
                ) }
                
              </Content>
            </Container>
                        
        )}
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000000',
    }, 
    Text:{
        fontSize: 25,
        fontFamily: Fonts.Bold,
        color: 'white'
    },
    View:{
        justifyContent:'flex-start',
        flexDirection:'row', 
        flexWrap:'wrap',
        //margin: 30
    }
});

//make this component available to the app
export default Home;
