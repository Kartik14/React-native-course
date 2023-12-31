import React, { useState, useContext } from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';
import { Context } from '../context/BlogContext';
import BlogPostForm from '../components/BlogPostForm';

const EditScreen = ({ navigation }) => {
    const { state, editBlogPost } = useContext(Context);
    const id = navigation.getParam('id');
    const blogPost = state.find(post => post.id === id);

    return <BlogPostForm 
        initialValues={{ title: blogPost.title, content: blogPost.content}}
        onSubmit={(title, content) => {
            editBlogPost(id, title, content, () => navigation.pop())
        }}
    />
}

const styles = StyleSheet.create({
    input: {
        borderColor: 'black',
        borderWidth: 1,
        marginBottom: 5
    }
});

export default EditScreen;