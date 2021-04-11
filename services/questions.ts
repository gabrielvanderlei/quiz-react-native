import questionsMock from './QuestionsMock';

export default {
    getAll: function(){
        return questionsMock;
    },

    getOne: function(id:any){
        return questionsMock.filter(questionData => questionData.id === id )[0];
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
        if(localStorage.getItem('QUESTIONS')){
            allQuestionsAnsweredStored = String(localStorage.getItem('QUESTIONS'));
        }
        
        let allQuestionsAnswered = JSON.parse(allQuestionsAnsweredStored);
        allQuestionsAnswered[storeObject.id] = storeObject;
        localStorage.setItem('QUESTIONS', JSON.stringify(allQuestionsAnswered));
    },

    getAnswers: function(){
        let allQuestions = this.getAll();
        let allQuestionsAnsweredStored:any = {};

        if(localStorage.getItem('QUESTIONS')){
            allQuestionsAnsweredStored = JSON.parse(String(localStorage.getItem('QUESTIONS')));
        }

        let allQuestionsAnswered = (allQuestionsAnsweredStored);
        let returnData:any = {};
        
        allQuestions.map(questionElement => {
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