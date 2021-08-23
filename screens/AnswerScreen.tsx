import { StackScreenProps } from '@react-navigation/stack';
import * as React from 'react';
import { StyleSheet, Text, ScrollView, View, Image } from 'react-native';

import { RootStackParamList } from '../types';
import { questions } from '../services';
import quiz from '../services/quiz';

import Button from '../components/Button';

export default function AnswerScreen({
  navigation,
  route
}: StackScreenProps<RootStackParamList, 'Answer'>) {
    const quizData = quiz.getData();
  const navigationParams:any = route.params;
  const params = questions.getOne(navigationParams.id);
  const correctAnswer = params.correctAnswer;
  const optionSelected = navigationParams.optionSelected;
  const isRightAnswer = (correctAnswer === optionSelected);
  const isLastQuestion = questions.isLast(navigationParams.id);
  const imgSource = params.answerAsset;

  let getTitle = (isRightAnswer:any, rightAnswer:any) => {
    if(isRightAnswer){
        return (<Text style={{color: "rgb(0, 0, 100)"}}>{params.correctAnswerInformation.title}</Text>);
    } else {
        return (<Text style={{color: "rgb(100, 0, 0)"}}>{`${params.wrongAnswerInformation.title} ${quizData.text.wrongAnswer} ${rightAnswer}`}</Text>);
    }
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
      <ScrollView>
        <Text style={styles.title}>{params.title}</Text>
        <View>
            <Text style={styles.linkText}>{getTitle(isRightAnswer, correctAnswer)}</Text>
            <Text style={styles.linkText}>{getDescription(isRightAnswer, correctAnswer)}</Text>

            {!!imgSource && (
              <Image
                source={imgSource}
                style={styles.image}
              />
            )}
        </View>
        
        {!isLastQuestion ? (
            <Button style={{ ...styles.link, ...styles.principal }} onPress={() => navigation.replace('Question', {
                id: String(params.nextQuestion)
            })}>
                <Text style={styles.principal}>{quizData.text.nextQuestion}</Text>
            </Button>
        ) : (
            <Button style={{ ...styles.link }} onPress={() => navigation.replace('FinalResult')}>
                <Text style={styles.principal}>{quizData.text.seeResults}</Text>
            </Button>
        )}

        <Button onPress={() => navigation.replace('Menu')} style={{ ...styles.link }}>
          <Text>{quizData.text.backToMenu}</Text>
        </Button>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: "justify",
    padding: 20,
    fontSize: 18
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
    fontSize: 16,
    color: 'black',
    textAlign: 'justify',
    lineHeight: 23,
    padding: 15
  },
  principal: {
    padding: 20,
    fontWeight: 'bold'
  },
  image: {
    width: 300,
    height: 300,
    resizeMode: 'contain'
  }
});
