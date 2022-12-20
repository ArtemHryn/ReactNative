import { useState, useEffect, useCallback } from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  Platform,
  KeyboardAvoidingView,
  Keyboard,
  Dimensions,
  TouchableWithoutFeedback,
  Button,
} from "react-native";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

const image = { url: "https://rozetked.me/images/uploads/f2hNmZrdlBsD.png" };

const initialState = { email: "", password: "" };

SplashScreen.preventAutoHideAsync();

export const LoginScreen = ({navigation}) => {
  const [focus, setFocus] = useState(false);
  const [state, setState] = useState(initialState);
  const [dimensions, setDimensions] = useState(
    () => Dimensions.get("window").width - 40 * 2
  );

  const [fontsLoaded] = useFonts({
    PlayFair: require("../../assets/fonts/PlayfairDisplay-Black.ttf"),
  });
  
  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

    useEffect(() => {
      const onChangeWidth = () => {
        const width = Dimensions.get("window").width - 40 * 2;
        setDimensions(width);
      };

      const screenWidth = Dimensions.addEventListener("change", onChangeWidth);
      return () => screenWidth?.remove();
    }, []);

  if (!fontsLoaded) {
    return null;
  }
  const onTouchOutOfForm = () => {
    Keyboard.dismiss();
    setFocus(false);
  };


  const onLogin = () => {
    setFocus(false);
    Keyboard.dismiss();
    console.log(state);
    setState(initialState);
  };

  return (
    <TouchableWithoutFeedback onPress={onTouchOutOfForm}>
      <View style={styles.container} onLayout={onLayoutRootView}>
        <ImageBackground source={image} style={styles.image}>
          <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
          >
            <View
              style={{
                ...styles.form,
                marginBottom: focus ? 20 : 100,
                width: dimensions,
              }}
            >
              <View style={styles.formHeader}>
                <Text style={{ ...styles.headerTitle, fontFamily: "PlayFair" }}>
                  Login
                </Text>
              </View>
              <View style={{ marginBottom: 10 }}>
                <Text style={styles.label}>Email</Text>
                <TextInput
                  style={styles.input}
                  textAlign={"center"}
                  onFocus={() => setFocus(true)}
                  onChangeText={(value) =>
                    setState((prevState) => ({ ...prevState, email: value }))
                  }
                  value={state.email}
                />
              </View>
              <View>
                <Text style={styles.label}>Password</Text>
                <TextInput
                  style={styles.input}
                  textAlign={"center"}
                  secureTextEntry={true}
                  onFocus={() => setFocus(true)}
                  onChangeText={(value) =>
                    setState((prevState) => ({
                      ...prevState,
                      password: value,
                    }))
                  }
                  value={state.password}
                />
              </View>
              <TouchableOpacity
                activeOpacity={0.8}
                style={styles.btn}
                onPress={onLogin}
              >
                <Text>SEND</Text>
              </TouchableOpacity>
              <Button
                title="got to registration"
                onPress={() => navigation.navigate("Registration")}
              />
            </View>
          </KeyboardAvoidingView>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
};

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
