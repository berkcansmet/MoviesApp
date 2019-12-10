//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet,ScrollView,Image,Dimensions,TouchableOpacity } from 'react-native';
import { Container, Content, Icon, Thumbnail } from 'native-base';
import {Fonts} from '../Helpers/Fonts';
import {Actions} from 'react-native-router-flux';

// create a component
class Trend extends Component {
    constructor(props){
        super(props)
        this.state= {
            filmAdı: 'Loading'
            
        };
    }

    
   
        componentDidMount(){
            fetch('http://www.omdbapi.com/?i=tt3896198&apikey=6522ea91')
            .then(data => data.json())
            .then(data2 => {
                console.log(data2.Title);
                this.setState({
                    filmAdı: data2.Title
                });
            });
        
        }
    
    render() {
        return (
                    <View style={styles.trend}>         
                                <TouchableOpacity onPress={() => Actions.Detay()}>
                                <Image 
                                    style={styles.thumbnail}
                                    source={{uri: 'https://images.unsplash.com/photo-1537815749002-de6a533c64db?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=545&q=80'}}/>
                                </TouchableOpacity>    
                                <Text style={styles.text}>{this.state.filmAdı}</Text>
                    </View> 
 
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        
        flexDirection:'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    trend: { 
        margin: 10
    },
    thumbnail: { 
        
        marginVertical: 5, 
        borderColor: 'pink', 
        width: Dimensions.get('window').width /2.5,
        height:200,  
    },
    text: {
        fontSize: 10,
        fontFamily: Fonts.Medium

    }
});

//make this component available to the app
export default Trend;
