import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Feather } from "@expo/vector-icons"
import { TextInput } from 'react-native-gesture-handler';

const SeachBar = ({ term, onTermChange, onTermSubmit }) => {
  return (
    <View style={styles.backgroundStyle}>
        <Feather name="search" style={styles.iconStyle} />
        <TextInput 
            placeholder="Search" 
            style={styles.inputStyle}
            value={term}
            onChangeText={onTermChange}
            onEndEditing={onTermSubmit}
            autoCapitalize="none"
            autoCorrect={false}
        />
    </View>
  );
};

const styles = StyleSheet.create({
    backgroundStyle: {
        backgroundColor: '#D3D3D3',
        height: 50,
        borderRadius: 5,
        marginHorizontal: 15,
        marginTop: 15,
        flexDirection: "row",
        marginBottom: 10
    },
    inputStyle: {
        fontSize: 24,
        flex: 1
    },
    iconStyle: {
        fontSize: 35,
        alignSelf: "center"
    }
});

export default SeachBar;
