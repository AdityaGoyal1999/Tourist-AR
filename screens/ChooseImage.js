import React from 'react';
import { Text, View, SafeAreaView, ScrollView, StyleSheet, Image } from 'react-native';
import { Card, ListItem, Button, Icon } from 'react-native-elements';

import SellerCard from '../components/SellerCard';

function ChooseImage({ navigation }) {
    return (
        <SafeAreaView styles={{flex: 1,}}>
            <ScrollView style={styles.container}>
                <Text style={styles.heading}>Gallery</Text>
                <Image
                    source={require('../assets/pics.png')}
                    style={styles.images}
                
                ></Image>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    cardText:{
        fontSize: 20,
        marginTop: 5,
        marginBottom: 5,
    },
    container: {
        padding: 10,
    },
    heading: {
        fontSize: 60,
    },
    images:{
        width: 400,
        height: 600,
    }
});

export default ChooseImage
