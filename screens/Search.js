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
                    placeholder="Search Places Around the 🌎"
                    // value={search}
                    lightTheme="True"
                />

                <Text style={styles.results}>🔍 Results for 'Museum'</Text>

                <SellerCard name="Dinosaur Museum" navigation={navigation} img='https://images.pexels.com/photos/410859/pexels-photo-410859.jpeg?cs=srgb&dl=pexels-mike-410859.jpg&fm=jpg' desc="Visit the dinsosaur museum from the comfort of your home."/>
                <SellerCard name="Art Museum" navigation={navigation} img='https://images.pexels.com/photos/3700245/pexels-photo-3700245.jpeg?cs=srgb&dl=pexels-tiff-ng-3700245.jpg&fm=jpg' desc="Discover different art installations from all over the world from the comfort of your home"/>
                <SellerCard name="Racing Museum" navigation={navigation} img='https://images.pexels.com/photos/2127038/pexels-photo-2127038.jpeg?cs=srgb&dl=pexels-maria-geller-2127038.jpg&fm=jpg' desc="Visit the Racing museum and check out the AR models"/>
                <SellerCard name="Cricket Museum" navigation={navigation} img='https://images.pexels.com/photos/4823713/pexels-photo-4823713.jpeg?cs=srgb&dl=pexels-suzy-hazelwood-4823713.jpg&fm=jpg' desc="Check out the famous cricket museum at Lords, London"/>
                {/* <SellerCard name="Jane's Store" navigation={navigation} img='store.jpg' desc="20% Discount on select products"/> */}

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
