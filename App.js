import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet } from "react-native";
import { useRoute } from "./components/router";


export default function App() {
  const routing = useRoute(true);
  return <NavigationContainer>{routing}</NavigationContainer>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  image: {
    flex: 1,
    justifyContent: "flex-end",
    resizeMode: "cover",
    alignItems: "center",
  },
  text: {
    color: "#b22222",
    fontSize: 20,
  },
  innerBox: {
    borderWidth: 2,
    padding: 20,
    borderColor: "green",
    borderRadius: 50,
    backgroundColor: "#ffebcd",
    alignItems: "center",
    marginHorizontal: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "#00008b",
    borderRadius: 5,
    padding: 10,
    color: "#008000",
  },
  form: {
    borderWidth: 2,
    padding: 20,
    borderColor: "green",
    borderRadius: 50,
    backgroundColor: "#ffebcd",
    marginHorizontal: 20,
  },
  label: {
    marginBottom: 5,
    fontSize: 15,
  },
  btn: {
    marginTop: 10,
    paddingHorizontal: 10,
    paddingVertical: 10,
    alignItems: "center",
    borderRadius: 10,
    backgroundColor: "#f0e68c",
    ...Platform.select({
      ios: {
        backgroundColor: "#e6e6fa",
        borderRadius: 15,
      },
    }),
  },
  formHeader: {
    alignItems: "center",
  },
  headerTitle: {
    color: "#f08080",
  },
});
