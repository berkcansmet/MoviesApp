//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet,Image } from 'react-native';
import { Container, Content, } from 'native-base';
import TopHeader from '../Components/TopHeader';
import {Fonts} from '../Helpers/Fonts'
import Icon from 'react-native-vector-icons/FontAwesome';
// create a component
class Detay extends Component {
    constructor(props){
        super(props)
        this.state= {
            filmImg: 'Loading'
            
        };
    }

    
   
        componentDidMount(){
            fetch('http://img.omdbapi.com/?i=tt3896198&apikey=6522ea91')
            .then(data => data.json())
            .then(data2 => {
                console.log(data2.Img);
                this.setState({
                    filmImg: data2.I
                });
            });
        
        }
    render() {
        return (
           <Content>
                <Container>
                    <TopHeader/>
                    <View >
                        <Image style={styles.Card}
                                    source={{uri: 'https://m.media-amazon.com/images/M/MV5BNjM0NTc0NzItM2FlYS00YzEwLWE0YmUtNTA2ZWIzODc2OTgxXkEyXkFqcGdeQXVyNTgwNzIyNzg@._V1_SX300.jpg'}}/>
                    </View>
                    <View style={styles.Imdb}>
                    <Text style={styles.Text}>IMDB PUANI:</Text>
                    <Text style={styles.Text1} >
                    <Icon name={'star'} color="yellow" size={25}/>
                    8.3</Text>
                    </View>
                    <View>
                    <Text style={styles.Text2}>Film Konusu:</Text>
                    </View>
                    <View>
                    <Text style={styles.Text3}>Film Konusu:</Text>
                    </View>
                </Container>
           </Content>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    Imdb:{
        marginLeft:110,
        marginTop:-200,
        height:30,
        width:180,
        backgroundColor:'transparent',
        
    },
    Card: {
        height:200,
        width:170,
        backgroundColor:'red'
    },
    Text: {
        fontSize:20,
        fontFamily: Fonts.Bold,
        color:'red'
    },
    Text1: {
        fontSize:15,
        fontFamily: Fonts.Medium,
        marginLeft:35,
    },
    Text2: {
        marginTop:180,
        fontSize:25,
        fontFamily: Fonts.Medium,

    },
    Text3:{
        marginTop:10,
        fontSize:15,
        fontFamily: Fonts.Thin
    }
    
});

//make this component available to the app
export default Detay;
