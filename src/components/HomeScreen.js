import React from 'react'
import {Platform, StyleSheet, Text, View, Button, ScrollView,TouchableOpacity} from 'react-native';
import Header from './common/Header';
import Tab from './common/Tab';
import Summary from './Summary';
import weight from '../images/weight.png'
import blood from '../images/blood.png'

class HomeScreen extends React.Component{

    render(){
        return(
            <View style={styles.container}>
                <Header parent={this.props} linkName="Profile" style={styles.headerContainer} title="This is header"/>
                <Summary style={styles.summaryContainer} title="Summary"/>
                <ScrollView style={styles.tabContainer}>
                    <Tab parent={this.props} linkName="Weight" title="Weight" imageLink={weight}/>
                    <Tab parent={this.props} linkName="UricAcid" title="URIC ACID" imageLink={blood}/>
                </ScrollView>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container:{
        flex: 1,
        flexDirection: 'column'
    },
    headerContainer:{
        flex: 1,
        paddingBottom: 5 
    },
    summaryContainer:{
        flex: 2,
        paddingBottom: 5
    },
    tabContainer:{
        flex: 3,
        paddingBottom: 5
    },
})



export default HomeScreen;