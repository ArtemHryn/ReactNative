import { NavigationContainer } from "@react-navigation/native";
import { useRoute } from "./components/router";
import { Provider } from "react-redux";
import { store } from "./src/redux/store";

export default function App() {
  const routing = useRoute(false);
  return (
    <Provider store={store}>
      <NavigationContainer>{routing}</NavigationContainer>
    </Provider>
  );
}

