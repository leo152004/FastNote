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
    Animated, Button,
} from 'react-native';
import Markdown from "react-native-markdown-display";

export default function AddNote() {
    const [markdownText, setMarkdownText] = useState('');
    const [isEditing, setIsEditing] = useState(false);

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
            <View style={styles.titleContainer}>
                <TextInput style={styles.noteTitle} placeholder={"New note"}
                           placeholderTextColor={"white"}></TextInput>
            </View>
            <View style={styles.buttonBar}>
                <TouchableOpacity style={styles.button} onPress={() =>handleButtonPress("\n# ")}><Text style={{color: 'white', textAlign:'center', textAlignVertical: 'center'}}>H1</Text></TouchableOpacity>
                <TouchableOpacity style={styles.button}  onPress={() =>handleButtonPress("\n## ")}><Text style={{color: 'white', textAlign:'center', textAlignVertical: 'center'}}>H2</Text></TouchableOpacity>
                <TouchableOpacity style={styles.button}  onPress={() =>handleButtonPress("\n### ")}><Text style={{color: 'white', textAlign:'center', textAlignVertical: 'center'}}>H3</Text></TouchableOpacity>
                <TouchableOpacity style={styles.button}  onPress={() =>handleButtonPress("_")}><Text style={{color: 'white', textAlign:'center', textAlignVertical: 'center'}}>Italic</Text></TouchableOpacity>
                <TouchableOpacity style={styles.button}  onPress={() =>handleButtonPress("*")}><Text style={{color: 'white', textAlign:'center', textAlignVertical: 'center'}}>Bold</Text></TouchableOpacity>
                <TouchableOpacity style={styles.button}  onPress={() =>handleButtonPress("- ")}><Text style={{color: 'white', textAlign:'center', textAlignVertical: 'center'}}>Bullet point</Text></TouchableOpacity>
                <TouchableOpacity style={styles.button}  onPress={() =>handleButtonPress("1. ")}><Text style={{color: 'white', textAlign:'center', textAlignVertical: 'center'}}>Number List</Text></TouchableOpacity>
                <TouchableOpacity style={styles.button}  onPress={() =>handleButtonPress("***\n")}><Text style={{color: 'white', textAlign:'center', textAlignVertical: 'center'}}>Stroke</Text></TouchableOpacity>
            </View>
            <TouchableOpacity
                activeOpacity={1}
                onPress={() => setIsEditing(true)}
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
                    <Markdown style={{body: {color: 'white', fontSize: 15}}}>
                        {markdownText || '_Tap to write something..._'}
                    </Markdown>
                )}
            </TouchableOpacity>
        </View>
    );
}



const styles = StyleSheet.create({
    titleContainer: {
        backgroundColor: '#222222',
        margin: 10,
        borderRadius: 5,
        paddingLeft: 10,
        paddingRight: 10,
    },
    buttonBar: {
      display: 'flex',
        flexDirection: 'row',
    },
    button: {
        backgroundColor: '#222222',
        borderRadius: 5,
        padding: 5,
        margin: 5,
        flex: 1,
        height: 40,
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