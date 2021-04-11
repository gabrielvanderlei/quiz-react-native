import { StackScreenProps } from '@react-navigation/stack';
import * as React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { RootStackParamList } from '../types';
import { questions } from '../services';
import quiz from '../services/quiz';

export default function FinalResultScreen({
  navigation,
  route
}: StackScreenProps<RootStackParamList, 'FinalResult'>) {
    let quizData = quiz.getData();
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
<Text style={styles.title}>{quizData.text.finalResults}</Text>
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
                                {quizData.text.notAnswered}
                            </View>
                        </>
                    ) }
                </>
            ))}
        </View>

      <TouchableOpacity onPress={() => navigation.replace('Menu')} style={styles.link}>
        <Text style={styles.linkText}>{quizData.text.backToMenu}</Text>
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
