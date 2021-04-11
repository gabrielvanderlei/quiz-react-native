import { StackScreenProps } from '@react-navigation/stack';
import * as React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { RootStackParamList } from '../types';
import { questions } from '../services';
import quiz from '../services/quiz';

export default function QuestionScreen({
  navigation,
  route
}: StackScreenProps<RootStackParamList, 'Question'>) {
    let quizData = quiz.getData();
  const navigationParams:any = route.params;
  const params = questions.getOne(navigationParams.id);
  const [optionSelected, setSelectedOption] = React.useState('');
  const correctAnswer = params.correctAnswer;

  let verifyQuestion = () => {
    navigation.navigate('Answer', {
        id: navigationParams.id,
        optionSelected
    })
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Question</Text>
        <View>
            <Text style={styles.linkText}>{params.title}</Text>
            <Text style={styles.linkText}>{params.description}</Text>

            <form>
                {params.options.map((optionElement:any) => (
                    <View>
                        <label>
                            <input onClick={() => setSelectedOption(optionElement.id)} type="radio" name="correctAnswer" /> 
                            {optionElement.id}. 
                             {optionElement.description}
                        </label>
                    </View>
                ))}
            </form>

            
            <TouchableOpacity
                onPress={verifyQuestion}
                style={styles.link}
            >
                <Text style={styles.linkText}>{quizData.text.verifyAnswer}</Text>
            </TouchableOpacity>
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
  }
});
