import axios from 'axios';

export default axios.create({
    baseURL:'https://api.yelp.com/v3/businesses',
    headers:{
        Authorization:'Bearer ci2osA1YF5SAvWt-YSZElhdW5x7y0pqXTn7cgV_wWQlLGqOM2nmbaZwgIeHUXh09EwQ0uYE29D-xeHLS2ziGW1klxTLCIfF-AQ3wGattOKCXgT0CSnW3uATpdIpjXXYx'
    }
});