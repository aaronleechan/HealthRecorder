import React,{useState,useEffect} from 'react';
import { View, StyleSheet, TextInput, Text,Button,TouchableOpacity,AsyncStorage } from 'react-native';
import data from '../../../data/bloodtest/uricAcid.json'

const TextInputComponent = (props) =>{
    const [inputValue,setinputValue] = useState("Hello World");

    useEffect(()=>{
        fetchingData()
    },[])

    const fetchingData = async () => {
        try{
            console.log(data)
        }catch(error){
            alert("Error")
        }
    }

    const saveData = async () => {
        try{
            let value = inputValue
            alert(value)
            let obj={
                'uricAcid': value,
                "date": new Date()
            }
            await AsyncStorage.setItem('UricAcid',JSON.stringify(obj)).done()
        }catch(error){
            console.log(error);
            alert(error)
        }
    }

    const displayData = async () =>{
        try{
            // let uricAcidLevel = await AsyncStorage.getItem('uricAcidLevel');
            // console.log({"URIC ACID LEVEL": uricAcidLevel})
            const value = await AsyncStorage.getItem('UricAcid').done();
            console.log(AsyncStorage)
            if(value!= null){
                alert("Display: " + value);
            }else{
                alert("Nothing Inside!!!!")
            }
        }catch(error){
            alert(error)
        }
    }

    return(
        <View style={styles.container}>
            {/* <Text>This is Input Value {inputValue}</Text> */}
            <TextInput
                value={inputValue}
                onChangeText={e=>setinputValue(e)}
                placeholder="Uric Acid Level"
                type="text"
                style={styles.textInputStyle}                
            />
            <Text style={styles.unitPosition}>mg/dL</Text>
            <TouchableOpacity onPress={saveData} style={styles.bottomStyle}>
                <View><Text style={styles.textStyle}>Submit</Text></View>
            </TouchableOpacity>
            <TouchableOpacity onPress={displayData} style={styles.bottomStyle}>
                <View><Text style={styles.textStyle}>Display</Text></View>
            </TouchableOpacity>
        </View>
    )
}

export default TextInputComponent;

const styles = StyleSheet.create({
    container:{
        flex: 1,
        padding: 10,
        alignContent: 'stretch',
        flexDirection: 'column',
    },
    textInputStyle:{
        borderRadius: 10,
        borderWidth: 0.5,
        borderColor: '#d6d7da',
        width: '80%',
        fontSize: 30,
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
        fontSize: 35,
        color: 'white',
    }

})