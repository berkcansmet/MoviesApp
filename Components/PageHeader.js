import React, { Component } from 'react';
import { View, Text, StyleSheet,TouchableOpacity,ScrollView } from 'react-native';
import {Header,Left, Body, Right, Icon, Input, Item, } from 'native-base';
import {Actions} from 'react-native-router-flux'
import axios from 'axios';
import {Home} from '../Screens/Home';


class PageHeader extends Component {

    constructor(props) {
              super(props);
              this.state = {
                  search : null,
                  result : null,
                  
              }
              
    };
    
    changeText = (arg) => {
        
        
        this.setState({ search: arg })
        
        console.log(arg)

                if (arg.length > 3){

        this.getRequestAxios(arg)

        } else {
            this.props.isAvailable(true)
        }
        
    }

    
    
    
    async getRequestAxios(arg){
        
        try{
            await axios.get('https://api.themoviedb.org/3/search/movie?api_key=9788f87bf69a26cbd3219f13458a38a3&query='+ arg).then(async(res) => {
               
               
               this.setState({
                   result: res.data.results
               })
               
               
               this.props.isAvailable(false)
               console.log("State", this.state.result )
               
                            
            })
                
            .catch(async(err) => {
                console.warn(err);
            })
        
            
        } catch (error) {
            console.error(error);
        }

    }
    rendersearch = () => {
        var search = this.state.result;
        if ( search && this.state.search.length > 3 ) {
            return search.map((data,index) => {
                return (

                    <View style={{ padding: 10, borderBottomWidth: 0.5, width: '100%', zIndex: 9999999}}>
                            <TouchableOpacity onPress={() => Actions.Detay({TrendId: data.id, title: data.original_title, image: data.poster_path, kaynak: data.overview, imdb: data.vote_average})}>
                            <Text>{data.original_title}</Text>
                            </TouchableOpacity>
                           
                    </View>
                    
                )
                
            })

        }

       
    };

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.searchView}>
                    
                    <Input style={styles.input} placeholderTextColor={'#373737'} placeholder={' Search to Movie '} placeholderTextColor='white' onChangeText={text => this.changeText(text)} />
                      <TouchableOpacity style={styles.icon}>  
                        <Icon name={'search'} size = {10} color='white' />
                      </TouchableOpacity>
                    
                    
                </View>
                
                
                
                <ScrollView style={{ }}>
                
                   {this.rendersearch()} 

                    <View>
                    
                    </View>
                </ScrollView>
                
                
                
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        padding:10,
        paddingTop:30,
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'black',
        borderBottomColor:'white',
        borderBottomWidth: 1
    },
    searchView:{
        width:'100%',
        height:55,
        flexDirection:'row',
        position:'relative'
    },
    input:{
        borderWidth: 0.5,
        width:'100%',
        alignItems:'center',
        borderColor: '#ccc',
        borderRadius:50,
    },
    icon:{
        position:'absolute',
        right:10,
        top:10,
    },
    View:{
        height:10,
        flexDirection:'row',
        position:'relative',
        backgroundColor: 'red'

    }
});

export default PageHeader;