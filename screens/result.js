import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  StatusBar,
} from "react-native";

const Result = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.bannerContainer}>
        <Image
          source={require("../assets/images/Analytics-pana.png")}
          style={styles.banner}
          resizeMode="contain"
        />
      </View>
      <View>
        <TouchableOpacity onPress={() => navigation.navigate("Home")} style={styles.button}>
          <Text style={styles.buttontext}>Home</Text>
        </TouchableOpacity>
      </View>
      <StatusBar />
    </View>
  );
};

export default Result;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal:20,
    height:"100%",
    alignItems:"center",
  },
  banner: {
    height: 300,
    width: 300,
  },
  bannerContainer: {
    justifyContent: "center",
    alignItems: "center",
    flex:1,
  },
  button:{
    width:"50%",
    backgroundColor:"#ff523b",
    padding:12,
    borderRadius:30,
    alignItems:"center",
    marginBottom: 30,
  },
  buttontext:{
    fontSize:20,
    fontWeight: "600",
    color: "white",
  }
});
