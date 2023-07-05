import React, {useContext, useEffect} from "react";
import { Text, StyleSheet, View, FlatList, Button, TouchableOpacity } from "react-native";
import { Context } from "../context/BlogContext";
import { Feather } from '@expo/vector-icons'

const IndexScreen = ({ navigation }) => {
    const { state, deleteBlogPosts, getBlogPosts } = useContext(Context)
    useEffect(() => {
        getBlogPosts();
        const listerner = navigation.addListener('didFocus', () => {
            getBlogPosts();
        });

        return () => {
            listerner.remove();            
        }
    }, []);
    return (
        <View>
            <FlatList 
                data={state}
                keyExtractor={blog => blog.title}
                renderItem={({ item }) => {
                    return (
                    <TouchableOpacity onPress={() => navigation.navigate('Show', {id: item.id})}>
                        <View style={styles.container}>
                            <Text style={styles.text}>{item.title} - {item.id}</Text>
                            <TouchableOpacity onPress={() => {deleteBlogPosts(item.id)}}>
                                <Feather style={styles.image} name="trash" />
                            </TouchableOpacity>
                        </View>
                    </TouchableOpacity>
                    )
                }}
            />
        </View>
    )
}

IndexScreen.navigationOptions = ({ navigation }) => {
    return {
        headerRight: () => (
        <TouchableOpacity onPress={() => navigation.navigate('Create')}>
            <Feather name="plus" size={30} />
        </TouchableOpacity>
        ),
    };
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 15,
        paddingHorizontal: 10,
        borderColor: 'gray',
        borderBottomWidth: 1
    },
    text: {
        fontSize: 18,
    },
    image: {
        fontSize: 24,
    }
})

export default IndexScreen;