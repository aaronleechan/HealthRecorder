import React, {useEffect,useState} from 'react'
import {StyleSheet, Text, View} from 'react-native';
import TextInputComponent from './TextInputComponent';
import ChartGraph from '../common/ChartGraph';
import ResultField from './ResultField';
import {bloodTest} from '../../../data/bloodtest/normal';

const UricAcid = (props) =>{
    const [datawithLavel,setdatawithLavel] = useState();
    const [loading, setloading] = useState(false)
    const dataArray = [];
    const [lastResult,setLastResult] = useState();

    useEffect(()=>{
        fetchUricAcid()
    },[])

    fetchUricAcid = async (obj)=>{
        setloading(true)
        const requestBody = {
            query: `
                query{
                    uricAcidlevel{
                        uricAcidLevel
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
                resData.data.uricAcidlevel.map(res=>{
                    var numberValue = Number.parseInt(res.createdAt)
                    var dateValue = new Date(numberValue)
                    var fullDateValue = dateValue.getFullYear()+'-'+(dateValue.getMonth()+1)+'-'+dateValue.getDate()
                    dataArray.push({'x': fullDateValue,'y': Number.parseInt(res.uricAcidLevel)})
                })
            }).then(res=>{
                setLastResult(dataArray[dataArray.length-1])
                setdatawithLavel(dataArray)
                setloading(false)
            })
            .catch(err=>{
                console.log(err)
            })
        }catch(error){
            console.log(error)
        }    
    }

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
    if(loading){
        return(
            <View><Text>Loading Screen</Text></View>
        )
    }else{
        return(
            <View style={styles.container}>
                <View style={styles.topContainer}>
                    <ChartGraph data={datawithLavel}/> 
                </View>
                <View style={styles.middleContainer}>
                    <ResultField data={bloodTest.uricAcid} lastResult={lastResult}/>
                </View>
                <View style={styles.bottomContainer}>
                    <TextInputComponent/>
                </View>
            </View>
        )
    }
}
export default UricAcid;

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