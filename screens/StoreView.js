import React from 'react';
import { SafeAreaView, Text, StyleSheet, ScrollView, View } from 'react-native';
import { Button } from 'react-native-elements';
import DiscountCard from '../components/DiscountCard';

function StoreView({ navigation, route }) {

    alert(route)
    // const { name, img, desc } = route.params;

    return (


        <SafeAreaView style={styles.container}>
            <Text style={styles.heading }>Name goes here</Text>
            <ScrollView>

                <DiscountCard name="{route.params.name}" img='melons.jpeg' desc="20% Discount on Watermelons"/>
                <DiscountCard name="OFFERS" img='melons.jpeg' desc="10% Discount on Bananas"/>
                <DiscountCard name="OFFERS" img='melons.jpeg' desc="Buy one get one free on select products"/>

            </ScrollView>
            <View style={styles.footer}>
                <Button
                    title="Visit Models"
                    // type="outline"
                    style={styles.button}
                    onPress = {() => navigation.navigate('Models')}
                />
                {/* <Button
                    title="Checkout Items"
                    type="outline"
                    style={styles.button}
                    onPress = {() => navigation.navigate('Checkout')}
                />
                <Button
                    title="Voice to Text for Items"
                    // type="outline"
                    style={ styles.button }
                    onPress = {() => navigation.navigate('VoiceToText')}
                /> */}
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    heading: {
        fontSize: 60,
    },
    button: {
        margin: 10,
    },
    container:{
        flex: 1,
    },
    footer:{
        width: '100%', 
        height: '20%', 
        backgroundColor: '#FAF9F6', 
        justifyContent: 'center', 
        // alignItems: 'center',
        position: 'absolute',
        bottom: 0
    },
});

export default StoreView
