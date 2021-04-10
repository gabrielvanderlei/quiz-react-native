import { StackScreenProps } from '@react-navigation/stack';
import * as React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { RootStackParamList } from '../types';
import { questions } from '../services';

export default function AnswerScreen({
  navigation,
  route
}: StackScreenProps<RootStackParamList, 'Answer'>) {
  const navigationParams:any = route.params;
  const params = questions.getOne(navigationParams.id);
  const correctAnswer = params.correctAnswer;
  const optionSelected = navigationParams.optionSelected;
  const isRightAnswer = (correctAnswer === optionSelected);
  const isLastQuestion = questions.isLast(navigationParams.id);

  let getTitle = (isRightAnswer:any, rightAnswer:any) => {
    let returnMessage = '';
    if(isRightAnswer){
        returnMessage = params.correctAnswerInformation.title;
    } else {
        returnMessage = `${params.wrongAnswerInformation.title}The right answer was ${rightAnswer}`;
    }

    return returnMessage;
  }
  
  let getDescription = (isRightAnswer:any, rightAnswer:any) => {
    let returnMessage = '';
    if(isRightAnswer){
        returnMessage = params.correctAnswerInformation.description;
    } else {
        returnMessage = params.wrongAnswerInformation.description;
    }

    return returnMessage;
  }

  (async () => {
    await questions.storeAnswer(navigationParams);
  })();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Question</Text>
        <View>
            <Text style={styles.linkText}>{getTitle(isRightAnswer, correctAnswer)}</Text>
            <Text style={styles.linkText}>{getDescription(isRightAnswer, correctAnswer)}</Text>

            {!isLastQuestion ? (
                <TouchableOpacity onPress={() => navigation.replace('Question', {
                    id: String(params.nextQuestion)
                })}>
                    <Text>Next question</Text>
                </TouchableOpacity>
            ) : (
                <TouchableOpacity onPress={() => navigation.replace('FinalResult')}>
                    <Text>See results</Text>
                </TouchableOpacity>
            )}
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
});
