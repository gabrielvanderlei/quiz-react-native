import questionsMock from './QuestionsMock';

export default {
    getAll: function(){
        return questionsMock;
    },

    getOne: function(id:any){
        return questionsMock.filter(questionData => questionData.id === id )[0];
    },

    // verifyAnswer: function(id, answer){

    // }
}