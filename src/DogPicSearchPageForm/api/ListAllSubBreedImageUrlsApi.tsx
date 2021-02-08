import axios from 'axios'


const getListOfSubBreedImageUrls = async (setState: any, breed: string, subBreed: string) => {
    
        await axios.get('https://dog.ceo/api/breed/' + breed + '/' + subBreed + '/images')
        .then(response => {
            console.log(response.data);
           setState(response.data.message)
        }, 
        (error) => {
            console.log(error);
        })
 } 

 export default getListOfSubBreedImageUrls;