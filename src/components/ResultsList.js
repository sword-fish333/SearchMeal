import React,{useState,useEffect} from 'react';
import {View,Text,StyleSheet,FlatList,TouchableOpacity} from 'react-native';
import ResultDetails from './ResultsDetails';
import {withNavigation} from 'react-navigation';
const ResultList=({title,restaurants,navigation})=>{
        if(!restaurants.length){
            return null;
        }
    return (
        <View>
            <Text style={styles.title}>
                {title}
            </Text>
            <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}
            data={restaurants}
            keyExtractor={result=>result.id}
            renderItem={({item})=>
            {
                return(
                        <TouchableOpacity onPress={()=>navigation.navigate('ResultsShowScreen',{id:item.id})}>
                            <ResultDetails restaurant={item} />
                        </TouchableOpacity>

                    )
            }
                }
            />
        </View>
    )
}
const styles=StyleSheet.create({

    title:{
        fontSize:25,
        marginLeft:15,
        marginBottom:5,
        fontWeight:'bold'
    }

})
export  default withNavigation(ResultList);