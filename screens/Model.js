import React from 'react'
import { Text, SafeAreaView, StyleSheet, View, Button, Linking, ScrollView } from 'react-native';
import { ListItem, Avatar } from 'react-native-elements';
import { WebView } from 'react-native-webview';

function VideoCall({ navigation }) {

      

    return (
        <SafeAreaView style={styles.container}>
                <Text style={styles.heading}>Model</Text>
                <WebView
                    source={{uri: 'https://go.echoar.xyz/jtLX'}}
                    style={{marginTop: 20,}}
                />
                <Button
                    title="View in AR"
                    // type="outline"
                    style={styles.button}
                    onPress = {() => Linking.openURL('https://go.echoar.xyz/jtLX') }
                />
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
