import React, { useEffect, useState } from 'react';
import useFetch from './useFetch';
import { DownloadOutlined } from '@ant-design/icons'

const QuoteList = () => {
    const url = "http://localhost:8000/quotes";
    const {isLoading, quote: data, error} = useFetch(url);
    const array = data;
    
  return (
    <div>
        {isLoading && <h1>{error}</h1>}
        {!isLoading && data.map((single)=>(
            <div className='quote'>
                <h2 className='quote_title'><DownloadOutlined/>{single.quote}</h2>
                <p className='quote_author'>{single.author}</p>
            </div>
        ))}
    </div>
    
  )
}

export default QuoteList;