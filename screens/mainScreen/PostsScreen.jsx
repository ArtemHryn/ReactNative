import { createStackNavigator } from "@react-navigation/stack";
import CommentsScreen from "../nestedScreens/CommentsScreen";
import { DefaultPostScreen } from "../nestedScreens/DefaultPostScreen";
import { MapScreen } from "../nestedScreens/MapScreen";

const Nested = createStackNavigator();

const PostsScreen = ({ route }) => {
  return (
    <Nested.Navigator>
      <Nested.Screen name="Posts" component={DefaultPostScreen} />
      <Nested.Screen name="Map" component={MapScreen} />
      <Nested.Screen name="Comments" component={CommentsScreen} />
    </Nested.Navigator>
  );
};

export default PostsScreen;
