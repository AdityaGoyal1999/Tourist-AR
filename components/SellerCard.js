import React from 'react';
import { Text, View, SafeAreaView, ScrollView, StyleSheet, Image } from 'react-native';
import { Card, ListItem, Button, Icon } from 'react-native-elements'

function SellerCard({ name, navigation, img, desc }) {


    return (
        <Card>
            <Card.Title>{ name }</Card.Title>
            <Card.Divider/>
                <Card.Image source={{
                        uri: img,
                        }}>
            </Card.Image>

            <Text style={styles.cardText}>
                {desc}
            </Text>
            <Button
            buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
            onPress= {() => navigation.navigate('Models', {
                name: name,
                img: img,
                desc: desc,
            })}
            title='VISIT' />
            
                    
        </Card>
    )
}

const styles = StyleSheet.create({
    cardText:{
        fontSize: 20,
        marginTop: 5,
        marginBottom: 5,
    },
});

export default SellerCard
