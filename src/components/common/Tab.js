import React from 'react';
import {StyleSheet, Text, View,Image, TouchableOpacity} from 'react-native';

const Tab = (props) =>{   
    return(
        <TouchableOpacity onPress={()=>props.parent.navigation.navigate(props.linkName)}>
            <View style={styles.container} >
                <Text style={styles.textStyle}>{props.title}</Text>
                <Image source={props.imageLink}/>
            </View>
        </TouchableOpacity>
    )
}


export default Tab

const styles = StyleSheet.create({
    container:{
        flex: 1,
        height: 80,
        backgroundColor: "#A2CEDB",
        padding: 5,
        borderColor: 2,
        borderWidth: 3,
        borderRadius: 5,
    },
    imagePosition:{

    },
    textStyle:{
        fontSize: 15,
        textShadowColor: 'grey',
        color: 'red',
        fontWeight: 'bold'
    }
})