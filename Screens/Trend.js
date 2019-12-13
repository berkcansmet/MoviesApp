//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet,ScrollView,Image,Dimensions,TouchableOpacity,ImageBackground } from 'react-native';
import { Container, Content, Thumbnail } from 'native-base';
import {Fonts} from '../Helpers/Fonts';
import {Actions} from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/FontAwesome';

// create a component
class Trend extends Component {
    
    renderKaynak(){
   if (this.props.kaynak.length > 5) {
      return <Text>{this.props.kaynak.substring(0,30)+'...'}</Text>;
   }
   
}
    render() {
        return (
                      
                                           
                               
                                <ImageBackground
                                    style={styles.thumbnail}
                                    source={{uri: 'https://image.tmdb.org/t/p/w600_and_h900_bestv2/' + this.props.backimg}}>
                                    <Image
                                    style={styles.thumbnail2}
                                    source={{uri: 'https://image.tmdb.org/t/p/w600_and_h900_bestv2/' + this.props.image}}
                                    />
                                <View style={styles.View}>
                                <Text style={styles.text2}>
                                    {this.props.title}
                                </Text>
                                <Text style={styles.text}>
                                <Icon style={styles.ıcon} name={'star'} color="yellow" size={15} />
                                {this.props.imdb}</Text>
                                <Text style={styles.text4}>
                                Detay :
                                </Text>
                                
                                <Text numberOfLines={1} ellipsizeMode="tail" style={styles.text5}>
                                       { this.renderKaynak() }
                                
                                </Text>

                                <TouchableOpacity onPress={() => Actions.Detay({TrendId: this.props.TrendId, title: this.props.title, image: this.props.image, kaynak: this.props.kaynak, imdb: this.props.imdb, backimg:this.props.backimg, yil: this.props.yil})}>
                                <View style={styles.View2}>
                                      <Text style={styles.text3}> D E T A Y </Text>
                                 </View>
                                 </TouchableOpacity>   
                                 </View>   

                                 
                                    </ImageBackground>
                                    
                                
                                
                                
                  
            
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
    
    
    thumbnail: { 
        
        borderColor: 'pink', 
        flex:1,
        height:400,
        flexDirection:'row'  ,
        justifyContent:'center',
        alignItems:'center'
    },
    thumbnail2:{
        width:200,
        resizeMode:'cover',
        height:200,
        borderColor:'white',
        borderWidth: 3

    },
    text: {
        fontSize: 17,
        fontFamily: Fonts.Medium,
        color: 'white',
        textAlign:'left',
        
    },
    text2:{
        fontSize: 15,
        fontFamily: Fonts.Medium,
        color: 'white',
        textAlign:'center'
        
    },
    View:{
        backgroundColor: 'rgba(0,0,0,0.6)',
        justifyContent:'flex-start',
        alignItems:'flex-start',
        height:200,
        flex:1
        
    },
    View2:{
        backgroundColor: 'rgba(255,0,0,0.7)',
        
        
        
        borderRadius:50,
        
    },
    text3:{
        fontSize: 15,
        fontFamily: Fonts.Medium,
        color: 'white',
        textAlignVertical:'center'
    },
    text4:{
        fontSize: 17,
        fontFamily: Fonts.Medium,
        color: 'white',
       
    },
    text5:{
        fontSize: 15,
        fontFamily: Fonts.Medium,
        
        color: 'white',
        
        
    },
    View3:{
        marginVertical:10
    }
});

//make this component available to the app
export default Trend;
