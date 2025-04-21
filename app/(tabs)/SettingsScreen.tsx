import {StyleSheet, Image, Platform, Button} from 'react-native';

import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { IconSymbol } from '@/components/ui/IconSymbol';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from "@react-navigation/native-stack";
import {RootStackParamList} from "@/App";

export default function SettingsScreen( ) {
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  console.log(navigation);
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}
      headerImage={<Image
          source={require('@/assets/images/gearSmall.png')}
          style={styles.headerImage}/>}>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Settings</ThemedText>
      </ThemedView>
      <Button
          title="Themes"
          onPress={() => navigation.navigate('SettingsTheme')}
      />
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
