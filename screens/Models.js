import React from 'react'
import { Text, SafeAreaView, StyleSheet, View } from 'react-native';
import { ListItem, Avatar } from 'react-native-elements'

function VideoCall({ navigation }) {


    const list = [
        {
          name: 'T-Rex model',
        //   avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
        //   subtitle: 'Vice President'
        },
        {
          name: 'Dinosaur 2',
        },
        {
            name: 'Dinosaur 3',
        },
        {
        name: 'Dinosaur 4',
        },
      ]
      

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.heading}>List of Models</Text>

            <View>
            {
                list.map((l, i) => (
                <ListItem key={i} bottomDivider onPress={() => navigation.navigate("Model")}>
                    <Avatar source={{uri: l.avatar_url}} />
                    <ListItem.Content>
                    <ListItem.Title>{l.name}</ListItem.Title>
                    <ListItem.Subtitle>{l.subtitle}</ListItem.Subtitle>
                    </ListItem.Content>
                </ListItem>
                ))
            }
            </View>
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
