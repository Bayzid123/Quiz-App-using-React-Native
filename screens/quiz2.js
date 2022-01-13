import React from "react";
import {
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const Quiz2 = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.parent}>
        <View style={styles.top}>
          <Text style={styles.question}>Q2. Do you a .Net developer?</Text>
        </View>
        <View style={styles.options}>
          <TouchableOpacity style={styles.optionBottom}>
            <Text style={styles.option}>Option 1</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.optionBottom}>
            <Text style={styles.option}>Option 2</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.optionBottom}>
            <Text style={styles.option}>Option 3</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.optionBottom}>
            <Text style={styles.option}>Option 4</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttons}>
          <TouchableOpacity
            onPress={() => navigation.navigate("Result")}
            style={styles.button}
          >
            <Text style={styles.buttonText}>End</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("Result")}
          >
            <Text style={styles.buttonText}>Skip</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("Result")}
          >
            <Text style={styles.buttonText}>Next</Text>
          </TouchableOpacity>
        </View>
      </View>

      <StatusBar />
    </View>
  );
};

export default Quiz2;

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    paddingHorizontal: 20,
    height: "100%",
  },
  top: {
    marginVertical: 15,
  },
  options: {
    marginVertical: 15,
    alignItems: "center",
    flex: 1,
  },
  buttons: {
    marginVertical: 15,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  button: {
    width: "25%",
    backgroundColor: "#ff523b",
    padding: 8,
    borderRadius: 30,
    alignItems: "center",
    marginBottom: 20,
  },
  buttonText: {
    fontSize: 15,
    fontWeight: "600",
    color: "white",
  },
  question: {
    fontSize: 20,
    fontWeight: "600",
  },
  option: {
    fontSize: 15,
    color: "white",
  },
  optionBottom: {
    paddingVertical: 15,
    marginVertical: 5,
    backgroundColor: "#ff523b",
    width: "90%",
    borderRadius: 30,
    alignItems: "center",
  },
  parent: {
    height: "100%",
  },
});
