import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import ParallaxScrollView from "@/components/ParallaxScrollView";
import {ThemedView} from "@/components/ThemedView";
import {ThemedText} from "@/components/ThemedText";

export default function SettingsTheme() {
    return (
        <ParallaxScrollView
            headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}
            headerImage={<Image
                source={require('@/assets/images/gearSmall.png')}
                style={styles.headerImage}/>}>
            <ThemedView style={styles.titleContainer}>
                <ThemedText type="title">Settings</ThemedText>
            </ThemedView>

        </ParallaxScrollView>
    );
}

const styles = StyleSheet.create({
    headerImage: {
        color: '#808080',
        bottom: -50,
        left: -35,
        position: 'absolute',

    },
    titleContainer: {
        flexDirection: 'row',
        gap: 8,
    },
});