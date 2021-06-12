// Stores near the user

import React from 'react';
import { Text, View, SafeAreaView, ScrollView, StyleSheet, Image } from 'react-native';
import { SearchBar } from 'react-native-elements';

import SellerCard from '../components/SellerCard';

function Stores({ navigation }) {
    return (
        <SafeAreaView>
            <ScrollView style={styles.container}>
                <Text style={styles.heading}>Search Places</Text>
                
                <SearchBar
                    placeholder="Type Here..."
                    // value={search}
                    lightTheme="True"
                />

                <Text style={styles.results}>🔍 Results for Museum</Text>

                <SellerCard name="Mark's Store" navigation={navigation} img='store.jpg' desc="Get fresh groceries at Mark's store at the cheapest price"/>
                <SellerCard name="Phil's Store" navigation={navigation} img='store.jpg' desc="Home grown fresh produce available here"/>
                <SellerCard name="John's Store" navigation={navigation} img='store.jpg' desc="Organic foods available here"/>
                <SellerCard name="Lary's Store" navigation={navigation} img='store.jpg' desc="Specializes in Kosher diet foods"/>
                <SellerCard name="Jane's Store" navigation={navigation} img='store.jpg' desc="20% Discount on select products"/>

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
    results: {
        fontSize: 30,
        textAlign: "center",
        marginTop: 20,
    },
});

export default Stores
