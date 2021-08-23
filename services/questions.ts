import configuration from "./configuration";
import AsyncStorage from '@react-native-async-storage/async-storage';

let questionsDataInformation = configuration.getQuestions();

export default {
    getAll: function(){
        return questionsDataInformation;
    },

    getOne: function(id:any){
        return questionsDataInformation.filter(function(questionData:any){
            return questionData.id === id 
        })[0];
    },
    
    isLast: function(id:any){
        return !(this.getOne(id).nextQuestion);
    },

    storeAnswer: async function({
        id,
        optionSelected
    }:any){
        let questionInformation = this.getOne(id);
        
        let storeObject = { 
            ...questionInformation,
            selectedAnswer: optionSelected
        };

        let allQuestionsAnsweredStored = JSON.stringify({});
        if(await AsyncStorage.getItem('@QUESTIONS')){
            allQuestionsAnsweredStored = String(await AsyncStorage.getItem('@QUESTIONS') || "{}");
        }
        
        let allQuestionsAnswered = JSON.parse(allQuestionsAnsweredStored);
        allQuestionsAnswered[storeObject.id] = storeObject;
        await AsyncStorage.setItem('@QUESTIONS', JSON.stringify(allQuestionsAnswered));
    },

    getAnswers: async function(){
        let allQuestions = this.getAll();
        let allQuestionsAnsweredStored:any = {};

        if(await AsyncStorage.getItem('@QUESTIONS')){
            allQuestionsAnsweredStored = JSON.parse(String((await AsyncStorage.getItem('@QUESTIONS')) || "{}"));
        }

        let allQuestionsAnswered = (allQuestionsAnsweredStored);
        let returnData:any = {};
        
        allQuestions.map(function(questionElement:any) {
            returnData[questionElement.id] = {
                ...questionElement,
                ...(allQuestionsAnswered[questionElement.id] || {})
            }
        })
        
        return returnData;
    }

    // verifyAnswer: function(id, answer){

    // }
}