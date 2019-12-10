import React, { Component } from 'react';
import { View, Text, StyleSheet,TouchableOpacity } from 'react-native';
import {Header,Left, Body, Right, Icon, Input, Item, } from 'native-base';


class PageHeader extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.searchView}>
                    
                    <Input style={styles.input} placeholderTextColor={'#373737'} placeholder={' Search to Movie '} />
                      <TouchableOpacity style={styles.icon}>  
                        <Icon name='search' size = {10} />
                      </TouchableOpacity>
                    
                    
                </View>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        padding:10,
        paddingTop:30,
        flexDirection:'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height:100,
        backgroundColor: '#fff',
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
    }
});

export default PageHeader;
