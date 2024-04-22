import React, { useState, useEffect } from "react";
import { View, Text, FlatList } from "react-native";
import userService from "../services/user.service"
const ApiPage = () => {
  const [users, setUsers] = useState([]);

  useEffect(async () => {
    const response=userService.getAllUsers();
    console.log(response)
  }, []);

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <View>
        <View>
          {users.map((user) => (
            <Text key={user}>{user.email}</Text>
          ))}
        </View>
      </View>
    </View>
  );
};

export default ApiPage;
