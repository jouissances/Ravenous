const clientId = 'elLUrdcQex2Hb_3QUbafgQ';
const secret = 'SCwlXadpKpbJ1EVgB6ZsnrO0udjYnDkVu798ANqdFEaqPd7epkPODCwk7JJx5hSn';
let accessToken = '';

const Yelp = {
    getAccessToken() {
        if (accessToken) {
            return new Promise(resolve => 
                resolve(accessToken));
        } 
        
        // Need to request a new access token        
        return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/oauth2/token?grant_type=client_credentials&client_id=${clientId}&client_secret=${secret}`, {
                method: 'POST'
            }).then(response => response.json())
            .then(jsonResponse => (accessToken = jsonResponse.access_token));
    },
    
    search(term, location, sortBy) {
        return Yelp.getAccessToken().then(() => {
            return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {
                headers: {
                    'Authorization': `Bearer ${accessToken}`
                }
            })}).then(response => response.json())
            .then(jsonResponse => {
                if (jsonResponse.businesses) {
                console.log('Checkpoint: Loading businesses');
                   return jsonResponse.businesses.map(business => {
                       return {
                           id: business.id,
                           imageSrc: business.image_url,
                           name: business.name,
                           address: business.location.address,
                           city: business.location.city,
                           state: business.location.state,
                           zipCode: business.location.zipCode,
                           category: business.categories.alias,
                           rating: business.rating,
                           reviewCount: business.review_count
                       }
                   })
                }
            })
        }
    }


export default Yelp;