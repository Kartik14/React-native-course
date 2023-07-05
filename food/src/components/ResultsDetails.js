import { React } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const ResultsDetails = ({ item }) => {
    return (
        <View style={styles.container}>
            <Image source={{ uri: item.image_url}} style={styles.imageStyle} />
            <Text style={styles.name}>{item.name}</Text>
            <Text>{item.rating} Stars, {item.review_count} Reviews</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    imageStyle: {
        height: 200,
        width: 300
    },
    name: {
        fontWeight: 'bold'
    },  
    container: {
        marginLeft: 15,
        marginBottom: 5
    }
})

export default ResultsDetails;