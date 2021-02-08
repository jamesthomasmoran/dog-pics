import axios from 'axios'


const getListOfDogBreeds = async (setState: any) => {
    
        await axios.get('https://dog.ceo/api/breeds/list/all')
        .then(response => {
            console.log(response.data);
           setState(response.data.message)
        }, 
        (error) => {
            console.log(error);
        })
 } 

 export default getListOfDogBreeds;
    