import React, { useEffect, useState } from "react";
import {
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const Quiz = ({ navigation }) => {
  const [questions, setQuestions] = useState();
  const [ques, setQues] = useState(1);
  const [optionTitle, setOptionTitle] = useState([]);
  useEffect(() => {
    fetch(`https://localhost:44333/api/QuizApp?id=${ques}`)
      .then((response) => response.json())
      .then((json) => {
        console.log(json);

        let options = json.questionOptions;
        setQuestions(json.quizQuestion);
        setOptionTitle(options);
        // let result = x.QuestionOptions;
        // let answer = result.map((e) => e.option);
        // setOptionTitle(answer);
        console.log(optionTitle);
      });
    // if (ques > 2) {
    //   navigation.navigate("Result");
    // }
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.parent}>
        <View style={styles.top}>
          <Text style={styles.question}>
            {questions}
            {/* Q1. Do you a React Native developer? */}
          </Text>
        </View>
        <View style={styles.options}>
          {/* {optionTitle} */}
          {/* <TouchableOpacity style={styles.optionBottom}>
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
          </TouchableOpacity> */}
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
            onPress={() => navigation.navigate("Quiz2")}
          >
            <Text style={styles.buttonText}>Skip</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("Quiz2")}
          >
            <Text style={styles.buttonText}>Next</Text>
          </TouchableOpacity>
        </View>
      </View>

      <StatusBar />
    </View>
  );
};

export default Quiz;

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
