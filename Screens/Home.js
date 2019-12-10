//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet,ScrollView } from 'react-native';
import PageHeader from '../Components/PageHeader';
import Trend from './Trend';
import Klasik from './Klasik';
import { Container, Content, Icon } from 'native-base';
import { Fonts } from '../Helpers/Fonts';

// create a component
class Home extends Component {
    render() {
        return (
            <Container>
              <Content>  
                <PageHeader/>
                <View>
                <Text style={styles.Text}>Trend</Text>
                <ScrollView horizontal={true} showHorizontalIndicator={false}>
                    <Trend/>
                    <Trend/>

<Trend/>

<Trend/>

<Trend/>

<Trend/>
<Trend/>
<Trend/>
<Trend/>
<Trend/>
<Trend/>

                </ScrollView>
                    <Text style={styles.Text}>Klasikler</Text>
                <View style={styles.View}>
                    <Klasik/>
                    <Klasik/>
                    <Klasik/>
                    <Klasik/>
                    <Klasik/>
                </View>    
                </View>
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
        backgroundColor: '#fff',
    }, 
    Text:{
        fontSize: 25,
        fontFamily: Fonts.Bold
    },
    View:{
        justifyContent:'flex-start',
        flexDirection:'row', 
        flexWrap:'wrap',
    }
});

//make this component available to the app
export default Home;
