import React,{useState,useEffect} from 'react';
import {View,Text,StyleSheet,ScrollView} from 'react-native';
import SearchBar from '../components/SearchBar';
import useRestaurants from '../hooks/useRestaurants';
import ResultList from '../components/ResultsList';

const SearchScreen=()=>{
 const [term,setTerm]=useState('');
const [apiRequest,restaurants,errorMessage]=useRestaurants();
const filterRestaurantsByPrice=(value1,value2)=>{
    return restaurants.filter(restaurant=>{
        return restaurant.price===value1 || restaurant.price===value2;
    })
}
    return(
       <>
            <SearchBar term={term}
                       autoCapitalize="none"
                       autoCorrect={false}
                       onTermEnd={()=>apiRequest(term)}
                       onTermChange={newTerm=>setTerm(newTerm)}/>
            {errorMessage ? <Text>{errorMessage}</Text> :null }

            <ScrollView>
            <ResultList

                restaurants={filterRestaurantsByPrice('£','$')} title="Cost effective"/>
            <ResultList

                restaurants={filterRestaurantsByPrice('££','$$')}  title="Bit Pricier"/>
            <ResultList

                restaurants={filterRestaurantsByPrice('£££','$$$')}  title="Big spender"/>
            </ScrollView>
       </>
            )
}

export default SearchScreen;