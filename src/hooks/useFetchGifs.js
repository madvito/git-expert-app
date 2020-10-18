import {useState, useEffect} from 'react';
import getGifs from '../helpers/getGifs';

const useFetchGifs = (category) => {
    const [state, setState] = useState({
        data: [],
        loading: true
    });

    useEffect(()=>{
        getGifs(category)
            .then(imgs => setState({
                data:imgs,
                loading:false
            })) 
            //.then(setState)//como la funcion entrega solo 1 argumento a setImages, se puede acortar asi
    },[category])

    return state;
}

export default useFetchGifs;