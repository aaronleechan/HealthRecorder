import React,{useEffect,useState} from 'react';
import { View, Text,StyleSheet } from 'react-native'


const ResultField = (props) =>{
    const [result,setResult] = useState(0);

    useEffect(()=>{
        if(props.lastResult != undefined){
            setResult(props.lastResult.y)
        }
        console.log(result);
    },[])
    
    return(
        <View style={styles.container}>
            <View style={styles.headercontainer}>
                <View style={styles.headerboxContainer}>
                    <Text style={styles.textStyle}>Min: {props.data.male.lower}</Text>
                </View>
                <View style={styles.headerboxContainer}>
                    <Text style={styles.textStyle}>Max: {props.data.male.higher}</Text>
                </View>
            </View>

            <View style={styles.centerContainer}>
                <Text style={styles.textStyle}>Result: {result}</Text>
            </View>
        </View>
    )
}

export default ResultField;

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
    headercontainer:{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    },
    centerContainer:{
        flex: 1,
        alignContent: 'center'
    },
    headerboxContainer:{
        width: "50%",
        height: 100,
    },
    textStyle:{
        fontSize: 28,
        textAlign: 'center',
        color: 'blue'
    }
})  