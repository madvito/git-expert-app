import React,{useState} from 'react'
import AddCategory from './components/AddCategory'
import GifGrid from './components/GifGrid';

const GifExpertApp = () =>{

    const [categories, setCategories] = useState(['One Punch Man']);

    // const handleChangeCategories = (input) =>{
    //     setCategories([...categories,input])
    // }
    return(
        <>
            <h2>GifExpertApp</h2>
            {/* <AddCategory  setCategories={setCategories} categories={categories}/> */}
            {/* <AddCategory  handleChangeCategories = {handleChangeCategories}/> */}
            <AddCategory  setCategories={setCategories} />
            <hr/>
            {/* <button onClick={handleAddCategory}>Agregar</button> */}
            <ol>
                {categories.map((category,index) => <GifGrid key={category} category={category} />)}
            </ol>
            
        </>
    )
}

export default GifExpertApp;