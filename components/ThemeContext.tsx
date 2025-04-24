// ThemeContext.tsx
import React, { createContext, useContext, useEffect, useState } from 'react';
import { Appearance, useColorScheme } from 'react-native';
import { DefaultTheme, DarkTheme, Theme } from '@react-navigation/native';

type ThemeMode = 'light' | 'dark' | 'auto';

type ThemeContextType = {
    mode: ThemeMode;
    theme: Theme;
    setMode: (mode: ThemeMode) => void;
};

const ThemeContext = createContext<ThemeContextType>({
    mode: 'auto',
    theme: DefaultTheme,
    setMode: () => {},
});

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
    const systemScheme = useColorScheme();
    const [mode, setMode] = useState<ThemeMode>('auto');

    const colorScheme = mode === 'auto' ? systemScheme : mode;
    const theme = colorScheme === 'dark' ? DarkTheme : DefaultTheme;

    return (
        <ThemeContext.Provider value={{ mode, theme, setMode }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useThemeMode = () => useContext(ThemeContext);
