import React,{useState,useEffect} from 'react';
import { View, StyleSheet} from 'react-native'
import PureChart from 'react-native-pure-chart';

const ChartGraph = (props) =>{
    if(props.data === undefined){
        return(
            <View style={styles.container}>
                <View style={styles.innerContainer}>
                    <PureChart type='line'/>
                </View>
            </View>
        )
    }else{
        return(
            <View style={styles.container}>
                <View style={styles.innerContainer}>
                    <PureChart data ={props.data} type='line'/>
                </View>
            </View>
        )
    }
}

export default ChartGraph

const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
        borderWidth: 1,
        borderColor: '#d6d7da',
    },
    innerContainer:{
        justifyContent: 'center',
        padding: 10,
        flex: 1,
    },
})  