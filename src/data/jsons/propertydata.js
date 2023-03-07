import React from "react";
import Sliderbar from "Dashboard/slidebar";
import axios from 'axios';  

// console.log(PropertyAPI().then((data: any) => console.log(data)))


export  const PropertyAPI = async() => {
    return axios.get('http://142.93.222.205/api/get-developers')
      .then(response => response.data);
  }
  

  export async function getAllDevelopers() {

    try{
        const response = await axios.get('http://142.93.222.205/api/get-developers');
        console.log('response  ', response)
        return response.data;
    }catch(error) {
        return [];
    }
    
}