import axios from  'axios';
import React from 'react'

const instance = axios.create({
    // THE API (cloud function) URL
    baseURL: 'http://localhost:5001/clone-20854/us-central1/api'
    //baseURL: "https://localhost:5001/api",
        
    });

export default instance;