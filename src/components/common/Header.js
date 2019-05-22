import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';

const Header = (props) =>{
    return(
        <View style={styles.container}>
            <Text style={styles.textStyle}>Health Recorder</Text>
            <TouchableOpacity style={styles.profilePosition}>
                <Image source={require('../../images/profile.png')}/>
            </TouchableOpacity>
        </View>
    )
}


export default Header;

const styles = StyleSheet.create({
    container:{
        height: 50,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    textStyle:{
        fontWeight: 'bold',
        textShadowColor: 'blue',
        textShadowRadius: 1,
        fontFamily: 'Cochin',
        fontSize: 30,
        paddingLeft: 5,
    },
    profilePosition:{
        paddingTop: 5,
        paddingRight: 5,
    }
})