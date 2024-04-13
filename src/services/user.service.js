import axios from "axios";
const API_URL = 'http://192.168.137.1:81/api/users/getall'; // API URL'sini tanımlayın

const UserService=()=>{
    getAllUsers:async()=>{
       
        const response=axios.get(API_URL);
        return (await response).data;
    }
}