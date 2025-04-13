import {Text, Image, StyleSheet, TouchableOpacity} from 'react-native';

import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import {useNavigation} from "expo-router";

export default function HomeScreen() {
    const navigation = useNavigation();
  return (
      <><ParallaxScrollView
          headerBackgroundColor={{light: '#A1CEDC', dark: '#292929'}}
          headerImage={<Image
              source={require('@/assets/images/FastNoteMini.png')}
              style={styles.Logo}/>}>
          <ThemedView style={styles.titleContainer}>
              <ThemedText type="title">Welcome to your notes.</ThemedText>
          </ThemedView>
        <Text style={styles.text}>
            Hello There
        </Text>
      </ParallaxScrollView>
          <TouchableOpacity
              style={styles.fab}
              onPress={() => navigation.navigate('AddNote' as never)}
          >
          <MaterialIcons name="add" size={28} color="white"/>
      </TouchableOpacity></>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
    text: {
      color: 'white',
    },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
    fab: {
        position: 'absolute',
        right: 20,
        bottom: 20,
        backgroundColor: '#292929',
        borderRadius: 30,
        width: 60,
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 4, // for Android shadow
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 3,
    },
  Logo: {
    height: 178,
    width: 400,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
