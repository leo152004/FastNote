import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainPage from './app/(tabs)/index';
import AddNote from './app/AddNote';
import SettingsTheme from './app/(settings)/SettingsTheme';
import SettingsScreen from './app/(tabs)/SettingsScreen';

export type RootStackParamList = {
    MainPage: undefined;
    AddNote: undefined;
    SettingsTheme: undefined;
    SettingsScreen: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="MainPage">
                <Stack.Screen name="MainPage" component={MainPage} />
                <Stack.Screen name="AddNote" component={AddNote} />
                <Stack.Screen name="SettingsTheme" component={SettingsTheme} />
                <Stack.Screen name="SettingsScreen" component={SettingsScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}