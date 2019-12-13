//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet,Image,ImageBackground } from 'react-native';
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
                <Container style={styles.content}>
                    <TopHeader/>
                    
                        <ImageBackground style={styles.Card}
                                    source={{uri: 'https://image.tmdb.org/t/p/w600_and_h900_bestv2/' + this.props.backimg}} >
                            <Image
                                    style={styles.Card2}
                                    source={{uri: 'https://image.tmdb.org/t/p/w600_and_h900_bestv2/' + this.props.image}}
                                    />
                        < View style={styles.Imdb}>
                            <Text style={styles.Text}>IMDB PUANI: </Text>
                            <Text style={styles.Text1} >
                            <Icon name={'star'} color="yellow" size={25}/>
                            {this.props.imdb}</Text>
                            <Text style={styles.Text}>YAPIM YILI:</Text>
                            <Text style={styles.Text1} >{this.props.yil}</Text>
                        </View>
                        </ImageBackground>
                        <View style={styles.View}>
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
        backgroundColor: 'black',
    },
    Imdb:{
        backgroundColor: 'rgba(0,0,0,0.6)',
        justifyContent:'flex-start',
        alignItems:'flex-start',
        height:150,
        flex:1
        
    },
    Card: {
        borderColor: 'pink', 
        flex:1,
        height:400,
        flexDirection:'row'  ,
        justifyContent:'center',
        alignItems:'center'
    },
    Card2:{
        width:200,
        resizeMode:'cover',
        height:200,
        borderColor:'white',
        borderWidth: 3

    },
    Text: {
        fontSize: 15,
        fontFamily: Fonts.Medium,
        color: 'white',
        textAlign:'center'
    },
    Text1: {
        fontSize: 17,
        fontFamily: Fonts.Medium,
        color: 'white',
        textAlign:'left',
    },
    Text2: {
        fontSize: 17,
        fontFamily: Fonts.Medium,
        color: 'white',

    },
    Text3:{
       
        fontSize:15,
        fontFamily: Fonts.Thin,
        color:'white',
    },
    Text4:{
      fontSize: 17,
        fontFamily: Fonts.Medium,
        color: 'white',
    },
    
    content:{
        backgroundColor:'black'
    },
    View:{
        flexDirection:'row'  ,
        justifyContent:'flex-start',
        alignItems:'center',
        flex:1,
    }
});

//make this component available to the app
export default Detay;
