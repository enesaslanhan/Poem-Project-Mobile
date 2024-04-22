import axios from "axios";
const API_URL = 'http://192.168.137.1:81/api/users/getall'; // API URL'sini tanımlayın

const UserService=()=>{
    const getAllUsers=()=>{
       
        response=axios.get(API_URL);
        return response.data;
    }
}