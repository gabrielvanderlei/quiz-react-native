import questionsMock from './QuestionsMock';

export default {
    getAll: function(){
        return questionsMock;
    },

    getOne: function(id:any){
        return questionsMock.filter(questionData => questionData.id === id );
    },

    verifyAnswer: function(id, answer){

    }
}