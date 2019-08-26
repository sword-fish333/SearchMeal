import React,{useState,useEffect} from 'react';
import {View,Text,StyleSheet,Image,FlatList} from 'react-native';

const ResultDetails=({restaurant})=>{

    return (
    <View style={styles.container}>
        <Image style={styles.image} source={{uri:restaurant.image_url}}/>
        <Text style={styles.title}>{restaurant.name}</Text>
        <Text>{restaurant.rating}Stars, {restaurant.review_count}Reviews</Text>
    </View>
        )
}

const styles=StyleSheet.create({
    container:{
        marginLeft:15
    },
    image:{
        width:240,
        marginBottom:5,
        height:120,
        borderRadius:4
    },
    title:{

        fontWeight:'bold',

    }
})

export default ResultDetails;