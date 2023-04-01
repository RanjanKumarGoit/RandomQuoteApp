import React, { useState } from 'react'
import { CaretRightOutlined } from '@ant-design/icons'
import useFetch from './useFetch'


const Quote = () => {
    const [number, setNumber] = useState(Math.floor((Math.random() * 100) + 1));
    const [color, setColor] = useState("#8aaad4");
    const {isLoading, quote, error} = useFetch("http://localhost:8000/quotes")
    const handleChange = () =>{
        setNumber(Math.floor((Math.random() * 100) + 1))
        const randomColor = "#"+Math.floor(Math.random()*16777215).toString(16);
        document.body.style.backgroundColor = randomColor;
        setColor(randomColor);
    }
    console.log(number);
  return (
    <div className='single_quote'>
        {!isLoading && <div>
            <h1 
                className='single_quote_title'
                style={{
                    color:`${color}`
                }}
                >{quote[number].quote}</h1>
            <p className='single_quote_author'>{quote[number].author}</p>
            <button className='next' onClick={handleChange} style={{backgroundColor:`${color}`,color:"white"}}>Next</button>
        </div>}
    </div>
  )
}

export default Quote