import { StackScreenProps } from '@react-navigation/stack';
import * as React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { RootStackParamList } from '../types';
import { questions } from '../services';

export default function MenuScreen({
  navigation,
}: StackScreenProps<RootStackParamList, 'Menu'>) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Menu</Text>
        <br />

        {(questions.getAll()).map((questionInformation:any) => (
            <TouchableOpacity onPress={() => navigation.navigate('Question', {
                id: questionInformation.id
            })} style={styles.menuOption}>
        <Text style={styles.linkText}>{questionInformation.title}</Text>
            </TouchableOpacity>
        ))}

        <br />
      <TouchableOpacity onPress={() => navigation.replace('FinalResult')} style={styles.link}>
        <Text style={styles.linkText}>Final Results</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.replace('Home')} style={styles.link}>
        <Text style={styles.linkText}>Back to home</Text>
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
    marginTop: 9,
    paddingVertical: 15,
  },
  menuOption: {
    marginTop: 1,
    paddingVertical: 15,
  },
  linkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});
