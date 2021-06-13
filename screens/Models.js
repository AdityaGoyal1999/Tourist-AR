import React from 'react'
import { Text, SafeAreaView, StyleSheet, View, Linking } from 'react-native';
import { ListItem, Avatar } from 'react-native-elements'

function VideoCall({ navigation }) {


    const list = [
        {
          name: 'T-Rex',
          avatar_url: 'https://images.pexels.com/photos/3689634/pexels-photo-3689634.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        //   subtitle: 'Vice President'
        },
        {
          name: 'Spinosaurus',
          avatar_url: 'https://media.istockphoto.com/photos/spinosaurus-in-the-lake-this-is-a-3d-render-illustration-picture-id1192609779?s=612x612'
        },
        {
            name: 'Brontosaurus',
            avatar_url: 'https://media.istockphoto.com/photos/apatosaurus-dinosaur-scene-3d-illustration-picture-id1158387577?s=612x612',
        },
        {
            name: 'Allosaurus',
            avatar_url: 'https://media.istockphoto.com/photos/photorealistic-and-scientifically-correct-3-d-rendering-of-an-al-picture-id633686336?s=612x612'
        },
      ]
      

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.heading}>List of Models</Text>

            <View style={{marginTop: 40,}}>
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
