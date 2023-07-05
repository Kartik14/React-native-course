import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
import yelp from '../api/yelp';


const showResultsScreen = ({ navigation }) => {
    const [result, setResult] = useState(null);
    const id = navigation.getParam('id');
  
    const getResult = async id => {
      const response = await yelp.get(`/${id}`);
      setResult(response.data);
    };
    useEffect(() => {
      getResult(id);
    }, []);
  
    if (!result) {
        console.log('here')
      return null;
    }
  
    return (
        <View>
            <Text>{result.name}</Text>
            <FlatList 
                data={result.photos}
                key={photo => photo}
                renderItem={({ item }) => {
                    return <Image style={styles.image} source={{ uri: item }} />
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    image: {
        height: 200,
        width: 300
    }
})

export default showResultsScreen;