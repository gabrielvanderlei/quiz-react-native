import { StackScreenProps } from '@react-navigation/stack';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { RootStackParamList } from '../types';
import { questions } from '../services';
import quiz from '../services/quiz';

import Button from '../components/Button';

export default function FinalResultScreen({
  navigation,
  route
}: StackScreenProps<RootStackParamList, 'FinalResult'>) {
    let quizData = quiz.getData();
    let [allResults, setAllResults] = useState([]);

    let getAnsweredStyle:any = (
        correctAnswer:string,
        selectedAnswer:string
    ) => {
        return (correctAnswer === selectedAnswer) ? 
            styles.rightAnswer:
            styles.wrongAnswer;
    }

    let loadQuestions = async () => {
      let questionsObject = await  questions.getAnswers();
      setAllResults(Object.values(questionsObject));
    }

    useEffect(() => {
      loadQuestions();
    })

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{quizData.text.finalResults}</Text>
        <View>
            {allResults.map((result:any) => (
                <>
                    { (result && result.selectedAnswer) ? (
                        <View>
                            <Text style={getAnsweredStyle(
                                result.correctAnswer,
                                result.selectedAnswer
                            )}>
                                {result.title} - 
                                {result.correctAnswer} - 
                                {result.selectedAnswer }
                            </Text>
                        </View>
                    ) : (
                        <>
                            <View>
                              <Text>
                                {(result && result.title) ? result.title : "[]"} - 
                                {quizData.text.notAnswered}
                              </Text>
                            </View>
                        </>
                    ) }
                </>
            ))}
        </View>

      <Button onPress={() => navigation.replace('Menu')} style={styles.link}>
        <Text>{quizData.text.backToMenu}</Text>
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
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    padding: 15,
    paddingTop: 150,
    marginBottom: 20,
    borderRadius: 9,
    backgroundColor: 'rgb(240,240,240)',
    color: 'black'
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
    backgroundColor: 'rgb(0, 200, 0)',
    padding: 9,
    paddingHorizontal: 40,
    margin: 5,
    color: 'white',
    borderRadius: 9
  },
  wrongAnswer: {
    backgroundColor: 'rgb(200, 0, 0)',
    padding: 9,
    paddingHorizontal: 40,
    margin: 5,
    color: 'white',
    borderRadius: 9
  }
});
