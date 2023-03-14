import React from "react";
import { useEffect, useState } from "react";
import { StyleSheet, View, FlatList, Image, Button } from "react-native";

export const DefaultPostScreen = ({ route, navigation }) => {
  const [myPosts, setMyPosts] = useState([]);
  useEffect(() => {
    if (route.params) {
      setMyPosts((prev) => [route.params.photo, ...prev]);
    }
  }, [route.params]);
  return (
    <View style={styles.container}>
      <Button title="Map" onPress={() => navigation.navigate("Map")} />
      <Button title="Comment" onPress={() => navigation.navigate("Comments")} />
      <FlatList
        data={myPosts}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.postContainer}>
            <Image source={{ uri: item }} style={styles.postPhoto} />
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  postContainer: {
    width: 300,
    height: 200,
    marginBottom: 10,
  },
  postPhoto: {
    flex: 1,
    height: 300,
    width: 350,
  },
  map: {
    flex: 1,
  },
});
