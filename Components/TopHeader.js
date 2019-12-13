//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet,TouchableOpacity } from 'react-native';
import {Header, Body,Left, Right,Button,} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Fonts} from '../Helpers/Fonts'
import {Actions} from 'react-native-router-flux'
// create a component
class TopHeader extends Component {

        
        
    state = {
		liked: false,
	}
	likeImage = async () => {
		const likeState = await !this.state.liked
		this.setState({ liked: likeState }) 
       } 

    render() {
        const { liked } = this.state
		const colorValue = liked ? 'red' : 'white'
		
        return (
            <View style={styles.container}>
                <View>
                    <TouchableOpacity onPress={() => Actions.Home()}>
                        <Icon name='arrow-left' size={20} color={'white'}/>
                    </TouchableOpacity>
                </View>    
                <View>
                    <Text style={styles.Text}>{this.state.title}</Text>
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
        paddingTop:10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomWidth: 2,
        borderBottomColor: 'white',
        backgroundColor:'black'

        
    },
    Text:{
        
        fontSize:25,
        fontFamily: Fonts.Bold,
    },
    
        
    
});

//make this component available to the app
export default TopHeader;
