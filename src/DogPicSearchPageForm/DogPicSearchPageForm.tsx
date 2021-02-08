import React, { ReactElement, useState, useEffect, SetStateAction } from 'react'
import { Autocomplete } from '@material-ui/lab';
import { TextField,Button } from '@material-ui/core';
import getListOfDogBreeds from './api/ListAllBreedsApi';
import getListOfBreedImageUrls from './api/ListAllBreedImageUrlsApi';
import getListOfSubBreedImageUrls from './api/ListAllSubBreedImageUrlsApi';
import { useForm } from "react-hook-form";
import '../App.css';

interface ISearchPageFormProps {
  setDogPics: (newDogPics: SetStateAction<never[]>) => void
}

interface IBreed {
  [key: string]: string[];
}

interface ISearchPageFormInput {
  breed: string,
  subBreed: string
}

const DogPicSearchPageForm = (props: ISearchPageFormProps): ReactElement => {

    const [breeds, setBreeds] = useState<IBreed>({});  
    const [subBreeds, setSubBreeds] = useState<string[]>([]);
    
    const [breed,setBreed] = useState<string>("");
    const [subBreed,setSubBreed] = useState<string>("");

    const { register, handleSubmit, errors, setError } = useForm<ISearchPageFormInput>();


    useEffect(() => {
        getListOfDogBreeds(setBreeds);
    }, []);


    const onSubmit = () => {
      
      if(subBreed === ""){
        getListOfBreedImageUrls(props.setDogPics,breed);
      }
      else{
        getListOfSubBreedImageUrls(props.setDogPics, breed, subBreed);
      }
    };

    return (
      <div className="form">
        <form onSubmit={handleSubmit(onSubmit)}>
          <Autocomplete
            className="autocomplete"
            value={ breed }
            id="grouped-demo"
            options={Object.keys(breeds)}
            getOptionLabel={(breed: string) => breed }
            renderInput={(params) => <TextField name="breed" {...params} label="Dog Breed" variant="outlined"/> } 
            onChange={(event: any, newBreed: string | null) => {
              if(typeof newBreed === 'string'){
                setBreed(newBreed)
                setSubBreeds(breeds[newBreed])
              }
            } 
            } 
            />
            { errors.breed && (
          <span role="alert">
            This field is required
          </span>
        )}

          <Autocomplete 
            className="autocomplete"
            value={ subBreed }
            id="grouped-demo"
            options={subBreeds}
            getOptionLabel={(breed: string) => breed }
            renderInput={(params) => <TextField name="subBreed"{...params} label="Sub Breed" variant="outlined" />}
            onChange={(event: any, newSubBreed: string | null) => {
              if(typeof newSubBreed === 'string'){
                setSubBreed(newSubBreed)
              }
            }
            } 
            />
        <Button type="submit" variant="contained" color="secondary">Search</Button>
      </form>
      </div>
    )
};

export default DogPicSearchPageForm;