import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Title = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Quizzler</Text>
        </View>
    )
}

export default Title;

const styles = StyleSheet.create({
    container:{
        paddingVertical:16,
        justifyContent:"center",
        alignItems:"center",
    },
    title:{
        fontWeight:"bold",
        fontSize:30,
    }
})
