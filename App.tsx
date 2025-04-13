import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainPage from './app/(tabs)/index';
import AddNote from './app/AddNote';

export type RootStackParamList = {
    MainPage: undefined;
    AddNote: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="MainPage">
                <Stack.Screen name="MainPage" component={MainPage} />
                <Stack.Screen name="AddNote" component={AddNote} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}