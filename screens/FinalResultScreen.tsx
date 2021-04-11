import { StackScreenProps } from '@react-navigation/stack';
import * as React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { RootStackParamList } from '../types';
import { questions } from '../services';

export default function FinalResultScreen({
  navigation,
  route
}: StackScreenProps<RootStackParamList, 'FinalResult'>) {
    let results = questions.getAnswers();
    let allResults:any = Object.values(results);

    let getAnsweredStyle:any = (
        correctAnswer:string,
        selectedAnswer:string
    ) => {
        return (correctAnswer === selectedAnswer) ? 
            styles.rightAnswer:
            styles.wrongAnswer;
    }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Final Results</Text>
        <View>
            {allResults.map((result:any) => (
                <>
                    { result.selectedAnswer ? (
                        <>
                            <View style={getAnsweredStyle(
                                result.correctAnswer,
                                result.selectedAnswer
                            )}>
                                {result.title} - 
                                {result.correctAnswer} - 
                                {result.selectedAnswer }
                            </View>
                        </>
                    ) : (
                        <>
                            <View>
                                {result.title} - 
                                {"Not answered"}
                            </View>
                        </>
                    ) }
                </>
            ))}
        </View>

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
    marginTop: 15,
    paddingVertical: 15,
  },
  linkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
  rightAnswer: {
      color: 'green'
  },
  wrongAnswer: {
      color: 'red'
  }
});
