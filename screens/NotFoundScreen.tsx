import { StackScreenProps } from '@react-navigation/stack';
import * as React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { RootStackParamList } from '../types';
import quiz from '../services/quiz';

export default function NotFoundScreen({
  navigation,
}: StackScreenProps<RootStackParamList, 'NotFound'>) {
    let quizData = quiz.getData();
  return (
    <View style={styles.container}>
<Text style={styles.title}>{quizData.text.screenNotExists}</Text>
      <TouchableOpacity onPress={() => navigation.replace('Home')} style={styles.link}>
  <Text style={styles.linkText}>{quizData.text.backToHome}</Text>
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
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
  linkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});
