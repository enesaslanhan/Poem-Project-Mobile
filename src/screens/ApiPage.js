import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';

const ApiPage = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const apiUrl="http://10.0.2.2:57111/api/poems/getall"
        const response = await axios.get(apiUrl);
        const jsonData = response.data;
        console.log(jsonData)
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  

  return (
    <View>
      
    </View>
  );
};

export default ApiPage;