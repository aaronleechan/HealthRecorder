import React from 'react'
import {Platform, StyleSheet, Text, View} from 'react-native';


const Summary = (props)=>{
    return(
        <View style={styles.container}>
            <Text> This is Summary Screen {props.title}</Text>
        </View>
    )
}

export default Summary

const styles = StyleSheet.create({
    container:{
        height: 200,
        backgroundColor: "#DAE6E9"
    }
})