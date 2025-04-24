import React, {useEffect, useRef, useState} from 'react';
import {
    View,
    StyleSheet,
    TextInput,
    BackHandler,
    TouchableOpacity,
    Keyboard,
    KeyboardAvoidingView,
    Platform,
    Text,
    Animated, Button, useColorScheme, ScrollView,
} from 'react-native';
import Markdown from "react-native-markdown-display";

export default function AddNote() {
    const [markdownText, setMarkdownText] = useState('');
    const [isEditing, setIsEditing] = useState(false);
    let isDarkMode = useColorScheme() === 'dark';
    const handleButtonPress = (markdownElement: string) => {
        setMarkdownText(markdownText + markdownElement);
    };

    useEffect(() => {
        const backHandler = BackHandler.addEventListener(
            'hardwareBackPress',
            () => {
                if (isEditing) {
                    setIsEditing(false);
                    Keyboard.dismiss();
                    return true;
                }
                return false;
            }
        );



        return () => backHandler.remove();
    }, [isEditing]);

    return (
        <View style={{flexDirection: 'column'}}>
            <View style={[styles.titleContainer, {backgroundColor: isDarkMode ? '#222222' : '#e8e8e8'}]}>
                <TextInput style={styles.noteTitle} placeholder={"New note"}
                           placeholderTextColor={isDarkMode ? "white": 'black'}></TextInput>
            </View>
            <ScrollView horizontal style={styles.buttonBar}>
                <TouchableOpacity style={[styles.button, {backgroundColor: isDarkMode ? '#222222' : '#e8e8e8'}]} onPress={() =>handleButtonPress("\n# ")}><Text style={{color: isDarkMode ? 'white' : 'black'}}>H1</Text></TouchableOpacity>
                <TouchableOpacity style={[styles.button, {backgroundColor: isDarkMode ? '#222222' : '#e8e8e8'}]}  onPress={() =>handleButtonPress("\n## ")}><Text style={{color: isDarkMode ? 'white' : 'black'}}>H2</Text></TouchableOpacity>
                <TouchableOpacity style={[styles.button, {backgroundColor: isDarkMode ? '#222222' : '#e8e8e8'}]}  onPress={() =>handleButtonPress("\n### ")}><Text style={{color: isDarkMode ? 'white' : 'black'}}>H3</Text></TouchableOpacity>
                <TouchableOpacity style={[styles.button, {backgroundColor: isDarkMode ? '#222222' : '#e8e8e8'}]}  onPress={() =>handleButtonPress("_")}><Text style={{color: isDarkMode ? 'white' : 'black'}}>Italic</Text></TouchableOpacity>
                <TouchableOpacity style={[styles.button, {backgroundColor: isDarkMode ? '#222222' : '#e8e8e8'}]}  onPress={() =>handleButtonPress("*")}><Text style={{color: isDarkMode ? 'white' : 'black'}}>Bold</Text></TouchableOpacity>
                <TouchableOpacity style={[styles.button, {backgroundColor: isDarkMode ? '#222222' : '#e8e8e8'}]}  onPress={() =>handleButtonPress("- ")}><Text style={{color: isDarkMode ? 'white' : 'black'}}>Bullet point</Text></TouchableOpacity>
                <TouchableOpacity style={[styles.button, {backgroundColor: isDarkMode ? '#222222' : '#e8e8e8'}]}  onPress={() =>handleButtonPress("1. ")}><Text style={{color: isDarkMode ? 'white' : 'black'}}>Number List</Text></TouchableOpacity>
                <TouchableOpacity style={[styles.button, {backgroundColor: isDarkMode ? '#222222' : '#e8e8e8'}]}  onPress={() =>handleButtonPress("***\n")}><Text style={{color: isDarkMode ? 'white' : 'black'}}>Stroke</Text></TouchableOpacity>
            </ScrollView>
            <TouchableOpacity
                activeOpacity={1}
                onPress={() => setIsEditing(true)}
                style={styles.containerInput}
            >
                {isEditing ? (
                    <TextInput
                        style={[styles.note,{color: isDarkMode ? 'white' : 'black'}]}
                        multiline
                        autoFocus
                        value={markdownText}
                        onChangeText={setMarkdownText}
                        onBlur={() => setIsEditing(false)}
                    />
                ) : (
                    <Markdown style={{body: {color: isDarkMode ? 'white' : 'black', fontSize: 15}}}>
                        {markdownText || '_Tap to write something..._'}
                    </Markdown>
                )}
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    titleContainer: {
        margin: 10,
        borderRadius: 5,
        paddingLeft: 10,
        paddingRight: 10,
    },
    buttonBar: {
      display: 'flex',
        flexDirection: 'row',
        height: 50,
    },
    button: {
        borderRadius: 5,
        padding: 5,
        margin: 5,
        flex: 1,
        height: 40,
        textAlign:'center',
        textAlignVertical: 'center',
        width: 40,
    },
    containerInput: {
        margin: 10,
        borderRadius: 5,
        paddingLeft: 10,
        paddingRight: 10,
        alignContent: 'center',
        paddingBottom: 10,
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
    },
    bottomBar: {
        padding: 16,
        backgroundColor: '#eee',
        borderTopWidth: 1,
        borderColor: '#ccc',
        position: 'fixed',
    },
    bottomBarActive: {
    },
    bottomText: {
        textAlign: 'center',
    },
});