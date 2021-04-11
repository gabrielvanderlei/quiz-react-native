import { StackScreenProps } from '@react-navigation/stack';
import * as React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { RootStackParamList } from '../types';
import quiz from '../services/quiz';

export default function HomeScreen({
  navigation,
}: StackScreenProps<RootStackParamList, 'Home'>) {
    let quizData = quiz.getData();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{quizData.title}</Text>
      <Text style={styles.description}>{quizData.description}</Text>
      <TouchableOpacity onPress={() => navigation.replace('Menu')} style={styles.link}>
        <Text style={styles.linkText}>{quizData.text.menuButton}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 14,
    fontWeight: 'bold',
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
