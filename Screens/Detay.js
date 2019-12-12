//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet,Image } from 'react-native';
import { Container, Content, } from 'native-base';
import TopHeader from '../Components/TopHeader';
import {Fonts} from '../Helpers/Fonts'
import Icon from 'react-native-vector-icons/FontAwesome';
import Home from './Home';
// create a component
class Detay extends Component {
     render() {
        return (
            
           <Content>
                <Container>
                    <TopHeader/>
                    <View >
                        <Image style={styles.Card}
                                    source={{uri: 'https://image.tmdb.org/t/p/w600_and_h900_bestv2/' + this.props.image}}/>
                    </View>
                    <View style={styles.Imdb}>
                        <Text style={styles.Text}>IMDB PUANI: </Text>
                        <Text style={styles.Text1} >
                        <Icon name={'star'} color="yellow" size={25}/>
                        {this.props.imdb}</Text>
                    </View>
                    <View>
                    <Text style={styles.Text2}>Film Konusu:</Text>
                    </View>
                    <View>
                    <Text style={styles.Text3}>{this.props.kaynak}</Text>
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
        marginLeft:180,
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
