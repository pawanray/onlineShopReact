import axios from 'axios';

export const fetchUsers = () =>{
        return axios.get("https://fakestoreapi.com/users");
} 

export const fetchProducts = () =>{
    return axios.get("https://fakestoreapi.com/products");
} 