import { StyleSheet, Text, View } from "react-native";

const CreateScreen = () => {
  return (
    <View style={styles.container}>
      <Text>ProfileSceen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default CreateScreen;
