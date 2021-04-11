import configuration from "./configuration";

let quizDataInformation = configuration.getQuiz();

export default {
    getData: function(){
        return quizDataInformation;
    }
}