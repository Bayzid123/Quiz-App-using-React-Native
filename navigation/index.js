import React from 'react'
import {createStackNavigator} from '@react-navigation/stack';
import { StyleSheet, Text, View } from 'react-native'
import Home from '../screens/home';
import Quiz from '../screens/quiz';
import Result from '../screens/result';
import Quiz2 from '../screens/quiz2';

const stack = createStackNavigator();
const Index = () => {
    return (
        <stack.Navigator>
            <stack.Screen name="Home" component={Home} options={{headerShown:false}}/>
            <stack.Screen name="Quiz" component={Quiz} />
            <stack.Screen name="Quiz2" component={Quiz2} />
            <stack.Screen name="Result" component={Result} />
        </stack.Navigator>
    )
}

export default Index;
