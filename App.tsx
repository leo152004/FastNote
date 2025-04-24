import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainPage from './app/(tabs)/index';
import AddNote from './app/AddNote';
import Settings from './app/(tabs)/SettingsScreen';
import { DefaultTheme, DarkTheme, Theme } from '@react-navigation/native';
import { Appearance, useColorScheme } from 'react-native';
import {AsyncLocalStorage} from "node:async_hooks";
import { ThemeProvider } from './components/ThemeContext';

export type RootStackParamList = {
    MainPage: undefined;
    AddNote: undefined;
    Settings: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
    const systemScheme = useColorScheme();
    const [mode, setMode] = React.useState<'light' | 'dark' | 'auto'>('auto');

    const colorScheme = mode === 'auto' ? systemScheme : mode;

    const theme: Theme = colorScheme === 'dark' ? DarkTheme : DefaultTheme;

    return (
        <ThemeProvider>
            <NavigationContainer  theme={theme}>
                <Stack.Navigator initialRouteName="MainPage">
                    <Stack.Screen name="MainPage" component={MainPage} />
                    <Stack.Screen name="AddNote" component={AddNote} />
                    <Stack.Screen name="Settings" component={Settings} />
                </Stack.Navigator>
            </NavigationContainer>
        </ThemeProvider>
    );
}