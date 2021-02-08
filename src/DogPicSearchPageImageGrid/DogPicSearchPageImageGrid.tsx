import React, { ReactElement, useState, useEffect, SetStateAction } from 'react'
import { GridList, GridListTile } from '@material-ui/core';
import '../App.css';

interface ISearchPageImageGridProps {
  dogPicUrls: string[]
}

const DogPicSearchPageImageGrid = (props: ISearchPageImageGridProps): ReactElement => {

    return (
        
        <div className="image-grid">
           
        <h3>{props.dogPicUrls.length}  Images Found</h3>
        <GridList cols={6}>
          {props.dogPicUrls.map((url) => (
            <GridListTile key={url}>
            <a href={url} >
              <img src={url} width="100%" />
            </a>
            </GridListTile>
          ))}
        </GridList>
      </div>
    )
};


export default DogPicSearchPageImageGrid;