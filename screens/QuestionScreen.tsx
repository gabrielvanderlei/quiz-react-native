import { StackScreenProps } from '@react-navigation/stack';
import * as React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { RootStackParamList } from '../types';
import { questions } from '../services';

export default function QuestionScreen({
  navigation,
  route
}: StackScreenProps<RootStackParamList, 'Question'>) {
  const navigationParams:any = route.params;
  const params = questions.getOne(navigationParams.id);
  return (
      <View>
          {JSON.stringify(params)}
      </View>
  )
}
  
  function a(){
  const [optionSelected, setSelectedOption] = React.useState(null);
  const correctAnswer = params.correctAnswer;

  let verifyQuestion = () => {
      if(correctAnswer === optionSelected){
          alert("Correct answer!");
      } else {
          alert("Incorrect answer.");
      }
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
                            {optionElement.description}
                        </label>
                    </View>
                ))}
            </form>

            
            <TouchableOpacity
                onPress={verifyQuestion}
            >
                <Text>Verify answer</Text>
            </TouchableOpacity>
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
