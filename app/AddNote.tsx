import React from 'react';
import {View, StyleSheet, TextInput} from 'react-native';

export default function AddNote() {
    return (
        <View>
        <View style={styles.container}>
            <TextInput style={styles.noteTitle}>Title</TextInput>
        </View>
        <View>
            <TextInput  style={styles.note}>Content...</TextInput>
        </View>
        </View>
    );
}



const styles = StyleSheet.create({
    container: {
        backgroundColor: '#222222',
        margin: 10,
        borderRadius: 5,
        paddingLeft: 10,
        paddingRight: 10,
    },
    text: {
        color: 'white',
    },
    title: {
        fontSize: 25,
        color: 'grey',
        textAlign: 'center',
    },
    noteTitle: {
        fontSize: 30,
        color: 'white',
    },
    note: {
        fontSize: 12,
        color: 'white',
        backgroundColor: '#222222',
        margin: 10,
        borderRadius: 5,
        paddingLeft: 10,
        paddingRight: 10,
        height: 900,
        alignContent: 'center',
    }
});