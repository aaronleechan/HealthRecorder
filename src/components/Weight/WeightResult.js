import React,{useEffect,useState} from 'react';
import { View, Text, StyleSheet } from 'react-native';


const WeightResult = (props) =>{
    const [fetchData,setFetchData] = useState(0)

    useEffect(()=>{
        const resultData = props.data
        if(resultData){  
            setFetchData(resultData[resultData.length-1].y)
        }
    });
    
    return(
        <View style={styles.container}>
            <View style={styles.centerContainer}>
                <Text style={styles.textStyle}>Result: {fetchData} lb</Text>
            </View>
        </View>
    )    
}

export default WeightResult

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
        borderWidth: 1,
        borderColor: '#d6d7da',
    },
    centerContainer:{
        flex: 1,
        alignContent: 'center'
    },
    textStyle:{
        fontSize: 28,
        paddingTop: 20,
        textAlign: 'center',
        color: 'blue'
    }
})  