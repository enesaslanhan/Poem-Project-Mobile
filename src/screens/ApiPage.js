import React, { useState, useEffect } from "react";
import { View, Text, FlatList } from "react-native";
import axios from "axios";

const ApiPage = () => {
  const [users, setUsers] = useState([]);

  useEffect(async () => {
    await axios
      .get("http://192.168.1.61:81/api/users/getall")
      .then((res) => setUsers(res.data.data))
      .catch((error) => console.error(error));
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
