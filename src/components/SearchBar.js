import  React from 'react';

import {View,Text,StyleSheet,TextInput} from 'react-native';
import { } from '@expo/vector-icons';
const SearchBar=({term,onTermChange,onTermEnd})=>{


    return (
        <View style={styles.backgroundStyle}>
        <AntDesign name="search1" style={styles.iconStyle}/>
        <TextInput placeholder='Search' value={term} onEndEditing={onTermEnd} onChangeText={newTerm=>onTermChange(newTerm)} style={styles.inputStyle}/>
        </View>
)
}
const styles=StyleSheet.create({

    backgroundStyle:{
        backgroundColor:'rgba(223, 228, 234,0.6)',
        height:50,
        borderRadius:5,
        marginHorizontal:15,
        marginVertical:15,
        flexDirection:'row'
    },
    inputStyle:{

        flex:1,
        fontSize:18
    },
    iconStyle:{
        fontSize:35,
        alignSelf:'center',
        marginHorizontal:15
    }
})
export  default SearchBar;