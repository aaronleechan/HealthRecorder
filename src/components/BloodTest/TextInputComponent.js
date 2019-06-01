import React,{useState,useEffect} from 'react';
import { View, StyleSheet, TextInput, Text,Button,TouchableOpacity,AsyncStorage } from 'react-native';
import {createUricAcid} from '../../graphQLQuery'


const TextInputComponent = (props) =>{
    const [inputValue,setinputValue] = useState("");

    const saveData = async () => {
        try{
            let value = inputValue
            let date = new Date();
            let obj={
                'uricAcidLevel': value,
                "createdAt": date
            }
            createUricAcid(obj)
        }catch(error){
            console.log(error);
            alert(error)
        }
    }

    return(
        <View style={styles.container}>
            <TextInput
                value={inputValue}
                onChangeText={e=>setinputValue(e)}
                placeholder="0.0"
                type="text"
                style={styles.textInputStyle}                
            />
            <Text style={styles.unitPosition}>mg/dL</Text>
            <TouchableOpacity onPress={saveData} style={styles.bottomStyle}>
                <View><Text style={styles.textStyle}>Submit</Text></View>
            </TouchableOpacity>
        </View>
    )
}

export default TextInputComponent;

const styles = StyleSheet.create({
    container:{
        paddingTop: 30,
        flex: 1,
        alignContent: 'stretch',
        flexDirection: 'column',
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
        borderWidth: 0.5,
        borderColor: '#d6d7da',
    },
    textInputStyle:{
        borderRadius: 10,
        borderWidth: 0.5,
        borderColor: '#d6d7da',
        width: '90%',
        fontSize: 25,
        alignSelf: 'center',
    },
    unitPosition:{
        alignSelf: 'flex-end',
        fontSize: 20,
        color: 'red',
    },
    bottomStyle:{
        width: '70%',
        borderRadius: 30,
        borderWidth: 0.5,
        backgroundColor: '#0074FF',
        height: 50,
        alignSelf: 'center',
    },
    textStyle:{
        paddingBottom: 15,
        alignSelf: 'center',
        fontSize: 25,
        color: 'white',
    }

})