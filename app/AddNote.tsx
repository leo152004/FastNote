import React, {useEffect, useState} from 'react';
import {View, StyleSheet, TextInput, BackHandler, TouchableOpacity, Keyboard} from 'react-native';
import Markdown from "react-native-markdown-display";

export default function AddNote() {
    const [markdownText, setMarkdownText] = useState('');
    const [isEditing, setIsEditing] = useState(false);

    useEffect(() => {
        const backHandler = BackHandler.addEventListener(
            'hardwareBackPress',
            () => {
                if (isEditing) {
                    setIsEditing(false);
                    Keyboard.dismiss();
                    return true; // prevent default back behavior
                }
                return false; // let it behave normally
            }
        );

        return () => backHandler.remove();
    }, [isEditing]);

    return (
        <View>
        <View style={styles.container}>
            <TextInput style={styles.noteTitle} placeholder={"Title"} placeholderTextColor={"white"}></TextInput>
        </View>
            <TouchableOpacity
                activeOpacity={1}
                onPress={() => setIsEditing(true)} // Let user tap to edit again
                style={styles.containerInput}
            >
                {isEditing ? (
                    <TextInput
                        style={styles.note}
                        multiline
                        autoFocus
                        value={markdownText}
                        onChangeText={setMarkdownText}
                        onBlur={() => setIsEditing(false)}
                    />
                ) : (
                    <Markdown style={{body: {color: 'white', fontSize:15}}}>
                        {markdownText || '_Tap to write something..._'}
                    </Markdown>
                )}
            </TouchableOpacity>
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
    containerInput: {
        backgroundColor: '#222222',
        margin: 10,
        borderRadius: 5,
        paddingLeft: 10,
        paddingRight: 10,
        height: 900,
        alignContent: 'center',
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
        fontSize: 15,
        color: 'white',
    }
});