// import React, { useState,useEffect } from 'react'
import React from 'react'
import useFetchGifs from '../hooks/useFetchGifs';
// import getGifs from '../helpers/getGifs';
import GifGridItem from './GifGridItem';

const GifGrid = ({category}) =>{
    // const [images, setImages] = useState([]);

    // useEffect(()=>{
    //     getGifs(category)
    //         // .then(imgs => setImages(imgs)) 
    //         .then(setImages)//como la funcion entrega solo 1 argumento a setImages, se puede acortar asi
    // },[category])
    const {loading, data} = useFetchGifs(category);
    console.log(loading, data);

    return(
        <>
            <h3>{category}</h3>

            {/* {loading? 'Cargando...':'Data cargada'} */}
            {loading && <p className='animate__animated animate__flash'>Loading</p>}
            <div className='card-grid'>
                {data.map(img=><GifGridItem key={img.id} {...img} />)} 
            </div> {/* el spread operator envia todos los elementos de img por separado */}
        </>

    )
}

export default GifGrid;