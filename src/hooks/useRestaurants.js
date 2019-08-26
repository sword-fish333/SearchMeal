import {useState,useEffect} from 'react';
import yelp from '../api/yelp';

export default ()=>{
    const [restaurants,setRestaurants]=useState([]);
    const[errorMessage,setErrorMessage]=useState('');

    const apiRequest=async (searchTerm)=>{


        try {
            const response = await yelp.get('/search', {
                params: {
                    limit: 50,
                    location: 'London',
                    term:searchTerm
                }
            });
            setRestaurants(response.data.businesses)
        }catch(err){
            setErrorMessage('Something went wrong!');
        }
    }

    useEffect(()=>{
        apiRequest('Vegan')
    },[])

    return [apiRequest,restaurants,errorMessage]
}
