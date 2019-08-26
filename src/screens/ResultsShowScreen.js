        import React,{useState,useEffect} from 'react';
        import {View,Text,StyleSheet,FlatList,Image} from 'react-native';
        import MapView from 'react-native-maps';

        import  {AntDesign} from '@expo/vector-icons';
        import  yelp from '../api/yelp';


        const ResultsShowScreen =({navigation})=>{

            const [restaurant,setRestaurant]=useState(null);
            const id=navigation.getParam('id');

            const getData= async(id)=>{
                const response =await yelp.get(`/${id}`);
                console.log(response.data);
                setRestaurant(response.data);
            }

            useEffect(()=>{
                getData(id);
            },[]);

            if(!restaurant){
                return null;
            }
            console.log(restaurant.display_address);
            return(
                    <View>
                        <Text style={styles.title}>{restaurant.name}</Text>
                        <Text style={styles.info}>Rating:{restaurant.rating} <AntDesign name="star"/></Text>
                        <View style={styles.container}>
                        <FlatList
                            horizontal
                            showsHorizontalScrollIndicator={false}
                            showsVerticalScrollIndicator={false}
                            keyExtractor={photo=>photo}
                            data={restaurant.photos}
                            renderItem={({item})=>{
                                return   <Image style={styles.image} source={{uri:item}}/>
                            }}
                        />
                        </View>
                        <View style={styles.infoContainer}>
                                <Text style={styles.infoTitle}>Info</Text>
                                <View style={styles.textContainer}>
                                    <Text style={styles.details}>Phone:</Text>
                                    <Text>{restaurant.phone}</Text>
                                </View>
                            <View style={styles.textContainer}>
                                <Text style={styles.details}>Address 1:</Text>
                                <Text>{restaurant.location.address1}</Text>
                            </View>
                            <View style={styles.textContainer}>
                                <Text style={styles.details}>Address 2:</Text>
                                <Text>{restaurant.location.address2}</Text>
                            </View>

                                {restaurant.location.address3 ?
                                    <View style={styles.textContainer}>
                                    <Text style={styles.details}>Address 3:</Text>
                                    <Text>{restaurant.location.address3}</Text>
                                    </View>
                                    : null}
                            <View style={styles.textContainer}>
                                <Text  style={styles.details}>Zip Code:</Text>
                                <Text>{restaurant.location.zip_code}</Text>
                            </View>
                        </View>
                        <MapView
                            initialRegion={{
                                latitude: 37.78825,
                                longitude: -122.4324,

                            }}
                        />
                    </View>
                )

        }




        const styles=StyleSheet.create({
            map: {
                height: 400,
                marginTop: 80
            },
                title:{
                    textAlign:'center',
                    fontSize:25,
                    fontWeight:'bold'
                },
            textContainer:{
              flexDirection:'row'
            },
            image:{
                width:240,
                marginBottom:5,
                margin:10,
                height:120,
                borderRadius:4
            },
            info:{
                    margin:15,
                fontSize:18,
                borderBottomWidth:1,
                borderColor:'black'
            },
            details:{
                    fontWeight:'bold'
            },
            infoContainer:{
              margin:15
            },
            container:{
                   alignItems:'center'
            },
            infoTitle:{
                    fontSize:20,
                fontWeight:'bold'
            }
        })

        export default ResultsShowScreen;