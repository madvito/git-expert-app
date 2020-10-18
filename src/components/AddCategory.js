import React, { useState } from 'react'
import PropTypes from 'prop-types';

//const AddCategory = ({handleChangeCategories}) =>{
// const AddCategory = ({setCategories,categories}) =>{
const AddCategory = ({setCategories}) =>{
    const [inputValue,setInputValue] = useState('')

    const handleTextChange = (e) => {
        setInputValue(e.target.value);
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        // setCategories([...categories,inputValue])
        // inputValue.trim() && handleChangeCategories(inputValue);
        inputValue.trim() && setCategories(cats=>[inputValue, ...cats]); //sin necesidad de categories, los set tienen callback opcional que trae el estado anterior;
        setInputValue('');
        
    }

    return(
        <form onSubmit={handleSubmit}>
            <h2>Add Category</h2>
            <input
                type='text'
                value={inputValue}
                onChange={handleTextChange}

            />
        </form>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}

export default AddCategory;