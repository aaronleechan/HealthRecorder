import React from 'react'
import {Platform, StyleSheet, Text, View} from 'react-native';
import TextInputComponent from '../common/TextInputComponent';

const UricAcid = () =>{
    return(
        <View style={styles.container}>
            <View style={styles.topContainer}></View>
            <View style={styles.middleContainer}></View>
            <View style={styles.bottomContainer}>
                <TextInputComponent/>
            </View>
        </View>
    )
}
export default UricAcid;

const styles = StyleSheet.create({
    container:{
        flex: 1
    },
    topContainer:{
        flex: 2,
        backgroundColor: 'grey'
    },
    middleContainer:{
        flex: 1,
        backgroundColor: 'blue'
    },
    bottomContainer:{
        flex: 2,
        flexDirection: 'column',
    }
})