import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";

//icons
import {
  MaterialCommunityIcons,
  Ionicons,
  AntDesign,
} from "@expo/vector-icons";

//screens
import { LoginScreen } from "../screens/auth/LoginScreen";
import { RegisterScreen } from "../screens/auth/RegistrationScreen";
import CreateScreen from "../screens/mainScreen/CreateScreen";
import PostsScreen from "../screens/mainScreen/PostsScreen";
import Profile from "../screens/mainScreen/Profile";

const Stack = createStackNavigator();
const MainTab = createBottomTabNavigator();

export const useRoute = (isAuth) => {
  if (!isAuth) {
    return (
      <Stack.Navigator>
        <Stack.Screen
          options={{ headerShown: false }}
          name="Login"
          component={LoginScreen}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Registration"
          component={RegisterScreen}
        />
      </Stack.Navigator>
    );
  }
  return (
    <MainTab.Navigator screenOptions={{ tabBarShowLabel: false }}>
      <MainTab.Screen
        name="Posts"
        component={PostsScreen}
        options={{
          tabBarIcon: ({ focused, size, color }) => (
            <MaterialCommunityIcons
              name="postage-stamp"
              size={size}
              color={color}
            />
          ),
        }}
      />
      <MainTab.Screen
        name="Create"
        component={CreateScreen}
        options={{
          tabBarIcon: ({ focused, size, color }) => (
            <Ionicons name="create-outline" size={size} color={color} />
          ),
        }}
      />
      <MainTab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ focused, size, color }) => (
            <AntDesign name="profile" size={size} color={color} />
          ),
        }}
      />
    </MainTab.Navigator>
  );
};
