//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet,TouchableOpacity } from 'react-native';
import {Header, Body,Left, Right,Button,} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Fonts} from '../Helpers/Fonts'
import {Actions} from 'react-native-router-flux'
// create a component
class TopHeader extends Component {
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

        
        
    state = {
		liked: false,
	}
	likeImage = async () => {
		const likeState = await !this.state.liked
		this.setState({ liked: likeState }) 
       } 

    render() {
        const { liked } = this.state
		const colorValue = liked ? 'red' : 'black'
		
        return (
            <View style={styles.container}>
                <View>
                    <TouchableOpacity onPress={() => Actions.Home()}>
                        <Icon name='long-arrow-left' size={35}/>
                    </TouchableOpacity>
                </View>    
                <View>
                    <Text style={styles.Text}>{this.state.filmAdı}</Text>
                </View>
                <TouchableOpacity onPress={this.likeImage} >
                <View style={styles.Right}>
                    <Icon name='heart' size={25} color={colorValue} />
                </View>
                </TouchableOpacity>
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        padding: 10,
        paddingTop:30,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomWidth: 0.3,
        borderBottomColor: 'transparent'
        
    },
    Text:{
        
        fontSize:25,
        fontFamily: Fonts.Bold,
    },
    
        
    
});

//make this component available to the app
export default TopHeader;
