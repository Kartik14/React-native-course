import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';

const BlogPostForm = ({ onSubmit, initialValues }) => {
    const [ title, setTitle ] = useState(initialValues.title);
    const [ content, setContent ] = useState(initialValues.content);

    return (
        <View>
            <Text>Enter Title:</Text>
            <TextInput 
                value={title}
                style={styles.input}
                onChangeText={(newValue) => setTitle(newValue)} />
            <Text>Enter Content:</Text>
            <TextInput 
                value={content}
                style={styles.input}
                onChangeText={(newValue) => setContent(newValue)} />
            <Button 
                title="Save Blog Post"
                onPress={() => {onSubmit(title, content)}}
            />
        </View>
        
    )
}

BlogPostForm.defaultProps = {
    initialValues: {
        title: '',
        content: ''
    }
};

const styles = StyleSheet.create({
    input: {
        borderWidth: 1,
        borderColor: 'black',
        marginBottom: 10
    }
});

export default BlogPostForm;