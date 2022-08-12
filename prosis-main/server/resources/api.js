import  { useEffect } from "react";
import {useState} from 'react'; 


// works
export const MetalsAPI = () => {

    const loadMetalsAPI = () => {
        fetch('https://metals-api.com/api/latest?access_key='+ env.METALS_API_KEY  )
        .then(response => response.json())
        .then(response => console.log(response.rates.ALU))
        .catch(err => console.error(err));
    } 

    useEffect(() => {loadMetalsAPI()});
}

// not working
export const ElectricAPI = () => {
    
    const loadElectricAPI = () => {
        fetch('http://example.com/movies.json')
        .then((response) => response.json())
        .then((data) => console.log(data));
    } 

    useEffect(() => {loadElectricAPI()});
}

// not working
export const GasAPI = () => {
    
    const loadGasAPI = () => {
        fetch('http://example.com/movies.json')
        .then((response) => response.json())
        .then((data) => console.log(data));
    } 

    useEffect(() => {loadGasAPI()});
}

// not working
export const OilAPI = () => {
    
    const loadOilAPI = () => {
        fetch('http://example.com/movies.json')
        .then((response) => response.json())
        .then((data) => console.log(data));
    } 

    useEffect(() => {loadOilAPI()});
}

