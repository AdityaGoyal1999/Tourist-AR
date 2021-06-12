import React from 'react'
import { Text, SafeAreaView, StyleSheet, View } from 'react-native';
import { ListItem, Avatar } from 'react-native-elements'

function VideoCall({ navigation }) {

      

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.heading}>Model</Text>

            
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    heading: {
        fontSize: 60,
    },
    container:{
        flex: 1,
        backgroundColor: '#ffffff',
    },
});

export default VideoCall
