import { StackScreenProps } from '@react-navigation/stack';
import React, { useState, useCallback } from 'react';
import { StyleSheet, FlatList, ScrollView, View, Image, Dimensions } from 'react-native';

import { RootStackParamList } from '../types';
import { questions } from '../services';
import quiz from '../services/quiz';

import Button from '../components/Button';
import { RadioButton, Text } from 'react-native-paper';

const QuestionScreen = ({
  navigation,
  route
}: StackScreenProps<RootStackParamList, 'Question'>) => {
    let quizData = quiz.getData();
  const navigationParams:any = route.params;
  const params:any = questions.getOne(navigationParams.id);
  const imgSource = params.asset;
  const onlyOptions:any = Object.values(params.options); 
  const [options, setOptions] = useState(onlyOptions); 
  const [selectedOption, setSelectedOption] = useState(''); 

  const verifyQuestion = () => {
    navigation.navigate('Answer', {
        id: navigationParams.id,
        optionSelected: selectedOption
    })
  }

  return (
    <View style={styles.container}>
      <ScrollView style={{flex:1, margin: 0, width: '100%'}}>
        <View> 
            <View>
              <Text style={{ ...styles.title}}>{params.title}</Text>
            </View>

            <View>
              <Text style={styles.linkText}>{params.description} {options.selected} </Text>

              {!!imgSource && (
                <Image
                  source={imgSource}
                  style={styles.image}
                />
              )}
            </View>
        </View>
        
        <RadioButton.Group onValueChange={newValue => setSelectedOption(newValue)} value={selectedOption}>
          {options.map((optionElement:any) => (
            <View>
              <RadioButton.Item 
                label={optionElement.id + ". " + optionElement.description} 
                value={optionElement.id} 
              />
            </View>
          ))}
        </RadioButton.Group>

        <View>
          <Button
              onPress={() => { verifyQuestion() }}
              style={styles.link}>
              <Text>{quizData.text.verifyAnswer}</Text>
          </Button>
          <Button onPress={() => { navigation.replace('Menu') }} style={styles.link}>
            <Text>{quizData.text.backToMenu}</Text>
          </Button>
        </View>
      </ScrollView>
    </View>
  );
}

const {width, height} = Dimensions.get('window')

const styles = StyleSheet.create({
  container: {
    flex: 1, flexWrap: 'wrap',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    flexDirection: 'column'
  },
  bold: { 
    fontWeight: 'bold' 
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
  image: {
    width: 300,
    height: 300,
    resizeMode: 'contain'
  }
});

export default QuestionScreen;