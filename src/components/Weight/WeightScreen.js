import React,{useState,useEffect} from 'react'
import TextWeightComponent from './TextWeightComponent'
import {Platform, StyleSheet, Text, View} from 'react-native';
import WeightResult from './WeightResult';
import ChartGraph from '../common/ChartGraph'

const WeightScreen = () =>{
    const [loading, setloading] = useState(false)
    const dataArray = [];
    const [fetchData,setfetchData] = useState();

    useEffect(()=>{
        fetchWeight()
    },[])

    fetchWeight = async () =>{
        setloading(true)
        const requestBody = {
            query: `
                query{
                    weight{
                        weight
                        createdAt
                    }
                }
            `
        };
        try{
            await fetch('http://10.0.0.20:3000/graphql',{
                method: 'POST',
                body: JSON.stringify(requestBody),
                headers:{
                    'Content-Type': 'application/json'
                }
            })
            .then(res=>
                res.json()
            )
            .then(resData=>{
                resData.data.weight.map(res=>{
                    var numberValue = Number.parseInt(res.createdAt)
                    var dateValue = new Date(numberValue)
                    var fullDateValue = dateValue.getFullYear()+'-'+(dateValue.getMonth()+1)+'-'+dateValue.getDate()
                    dataArray.push({'x': fullDateValue,'y': Number.parseInt(res.weight)})
                })
            }).then(res=>{
                setfetchData(dataArray)
                setloading(false)
            })
            .catch(err=>{
                console.log(err)
            })
        }catch(error){
            console.log(error)
        }   
    }

    return(
        <View style={styles.container}>
            <View style={styles.topContainer}>
                <ChartGraph data={fetchData}/>
            </View>
            <View style={styles.middleContainer}>
                <WeightResult data={fetchData}/>
            </View>
            <View style={styles.bottomContainer}>
                <TextWeightComponent type="weight"/>
            </View>
        </View>
    )
}

export default WeightScreen;

const styles = StyleSheet.create({
    container:{
        flex: 1
    },
    topContainer:{
        flex: 2,
        padding: 10,
    },
    middleContainer:{
        flex: 1,
        padding: 5
    },
    bottomContainer:{
        padding: 5,
        flex: 2,
        flexDirection: 'column',
    }
})