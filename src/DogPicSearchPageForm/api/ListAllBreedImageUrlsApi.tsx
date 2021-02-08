import axios from 'axios'


const getListOfBreedImageUrls = async (setState: any, breed: string) => {
    
        await axios.get('https://dog.ceo/api/breed/' + breed + '/images')
        .then(response => {
            console.log(response.data);
           setState(response.data.message)
        }, 
        (error) => {
            console.log(error);
        })
 } 

 export default getListOfBreedImageUrls;