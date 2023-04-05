import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

const ProfileScreen = ({ navigation }) => {
    let data = [
      {
        name: 'kimpang',
        avatar: 'sadasdas'
      }
    ]
    let singleString = 'asdasdasdas';
    let dataObj = {
      name: 'kimpang',
      avatar: 'sadasdas'
    }
    const fullname = data.name + data.avatar;

    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Home Screen</Text>
        {singleString}
        <Button
          title="Go to ProfileScreen"
          onPress={() => navigation.navigate("Profile")}
        />
      </View>
    );
}

export default ProfileScreen;
   