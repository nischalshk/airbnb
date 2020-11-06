import React, {useState} from 'react'
import './Banner.css'
import {Button} from "@material-ui/core";
import Search from './Search.js';

function Banner() {
    const[showSearch, setShowSearch]=useState(false);


    return (
        <div className='banner'>
            <div className='banner__search'>
                    <Button onClick={()=>setShowSearch(!showSearch)}
                    className='banner__searchButton' variant='outlines'>Search Dates</Button>
                     {showSearch && <Search />}
                </div>
           <div className='banner__info'>
                <h1>Get out and Stretch your imagination</h1>
                <h5>Plan a different kind of getaway to uncover the hidden gems near you.</h5>
                <Button variant='outline'>Explore Nearby </Button>
               </div>
        </div>
    )
}

export default Banner
