import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import { Camera } from "expo-camera";
// import * as MediaLibrary from "expo-media-library";
import { useEffect, useState } from "react";
import * as Location from "expo-location";


const CreateScreen = ({ navigation }) => {
  const [camera, setCamera] = useState(null);
  const [location, setLocation] = useState(null);
  const [hasPermission, setHasPermission] = useState(null);
  const [photo, setPhoto] = useState(null);

  const takePhoto = async () => {
    const snap = await camera.takePictureAsync();
    const photoLocation = await Location.getCurrentPositionAsync();
    setLocation({
      latitude: photoLocation.coords.latitude,
      longitude: photoLocation.coords.longitude,
    });
    console.log(photoLocation.coords.latitude, photoLocation.coords.longitude);
    setPhoto(snap.uri);
  };

  const postPhoto = () => {
    navigation.navigate("DefaultPostScreen", { photo, location });
  };

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === "granted");
      let foreground = await Location.requestForegroundPermissionsAsync({})
      if (foreground.status !== 'granted') {
        console.log('no access to location');
      }
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={styles.container}>
      <Camera
        style={styles.camera}
        ref={setCamera}
        zoom={0}
        type={Camera.Constants.Type.front}
      >
        <TouchableOpacity
          style={styles.cameraBtn}
          activeOpacity={0.5}
          onPress={takePhoto}
          disabled={!hasPermission}
        >
          <Text style={styles.cameraBtnText}>Snap</Text>
        </TouchableOpacity>
      </Camera>
      {photo && (
        <View style={styles.takePhotoContainer}>
          <Image source={{ uri: photo }} style={styles.afterSnapPhoto} />
          <TouchableOpacity
            style={styles.postBtn}
            activeOpacity={0.5}
            onPress={postPhoto}
            disabled={!hasPermission}
          >
            <Text style={styles.cameraBtnText}>Post</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  camera: {
    height: 400,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  cameraBtn: {
    alignItems: "center",
    marginBottom: 20,
    borderWidth: 2,
    borderColor: "#dcdcdc",
    borderRadius: 10,
    width: 100,
  },
  cameraBtnText: {
    color: "#fff",
    fontSize: 26,
  },
  takePhotoContainer: {
    borderWidth: 2,
    borderColor: "red",
    flex: 1,
  },
  afterSnapPhoto: {
    resizeMode: "",
    height: 320,
  },
  postBtn: {
    position: "absolute",
    alignItems: "center",
    borderWidth: 2,
    borderColor: "#dcdcdc",
    borderRadius: 10,
    width: 100,
    left: 150,
    bottom: 10,
  },
});

export default CreateScreen;
