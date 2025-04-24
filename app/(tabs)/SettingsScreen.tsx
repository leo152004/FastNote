import {StyleSheet, Image, Platform, Button, View} from 'react-native';

import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { useThemeMode } from '@/components/ThemeContext';

type Props = {
    currentMode: 'light' | 'dark' | 'auto';
    setMode: (mode: 'light' | 'dark' | 'auto') => void;
};

export default function SettingsScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}
      headerImage={<Image
          source={require('@/assets/images/gearSmall.png')}
          style={styles.headerImage}/>}>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Settings</ThemedText>
      </ThemedView>
        <ThemedView>
            <Collapsible title="General">
                <ThemedText>
                    Language
                    Connect to a cloud
                    Help
                </ThemedText>
            </Collapsible>
            <Collapsible title="Editor">
                <ThemedText>
                    Font size
                    Markdown
                    Spell Check
                </ThemedText>
            </Collapsible>
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
