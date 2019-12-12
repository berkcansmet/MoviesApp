//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet,ScrollView,Image,Dimensions,TouchableOpacity } from 'react-native';
import { Container, Content, Icon, Thumbnail } from 'native-base';
import {Fonts} from '../Helpers/Fonts'
import {Actions} from 'react-native-router-flux'

// create a component
class Trend extends Component {
    
    
    
    render() {
        return (
            
            
                    <View style={styles.trend}> 
                            <TouchableOpacity onPress={() => Actions.Detay({TrendId: this.props.TrendId, title: this.props.title, image: this.props.image, kaynak: this.props.kaynak, imdb: this.props.imdb})}>
                                <Image
                                    style={styles.thumbnail}
                                    source={{uri: 'https://image.tmdb.org/t/p/w600_and_h900_bestv2/' + this.props.image}}/>
                                <Text style={styles.text}>{this.props.title}</Text>
                            </TouchableOpacity>   
                                
                    </View> 
            
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection:'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    trend: { 
        margin: 10
    },
    thumbnail: { 
        marginHorizontal: 5, 
        borderColor: 'pink', 
        width: Dimensions.get('window').width / 2,
        height:200,  
    },
    text: {
        fontSize: 17,
        fontFamily: Fonts.Medium

    },
    text2:{

    }
});

//make this component available to the app
export default Trend;
