import { StackScreenProps } from '@react-navigation/stack';
import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { RootStackParamList } from '../types';
import quiz from '../services/quiz';

import Button from '../components/Button';

export default function HomeScreen({
  navigation,
}: StackScreenProps<RootStackParamList, 'Home'>) {
    let quizData = quiz.getData();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{quizData.title}</Text>
      <Text style={styles.description}>{quizData.description}</Text>
      <Button onPress={() => navigation.replace('Menu')} style={styles.link}>
        <Text>{quizData.text.menuButton}</Text>
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 0,
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    padding: 9,
    paddingTop: 300,
    marginBottom: 20,
    borderRadius: 9,
    backgroundColor: 'rgb(100, 0, 100)',
    color: 'white'
  },
  description: {
    fontSize: 20,
    fontWeight: 'normal',
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
  linkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});
