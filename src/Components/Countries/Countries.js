import React, { useState, useEffect } from 'react';
import Country from '../Country/Country';

const Countries = () => {
        const [countries, setCountries ] = useState([])
        useEffect( ()=> {
            fetch('https://restcountries.eu/rest/v2/all')
            .then(res=>res.json())
            .then(data=>setCountries(data))
        }, [])
    return (
        <div className="header">
           <h2>All Country Name : {countries.length}</h2> 
           {
               countries.map(country => <Country></Country>)
           }
        </div>
    );
};

export default Countries;