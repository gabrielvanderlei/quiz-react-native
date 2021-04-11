import configuration from '../configuration';

export default {
    getLang: function(){
        return configuration.setup.lang;
    },

    getLangData: function(){
        let lang:any = this.getLang();
        let allLangs:any = configuration.langs;
        return allLangs[lang];
    },

    getQuiz: function(){
        let langData = this.getLangData();
        return langData.QuizMock;
    },
    
    getQuestions: function(){
        let langData = this.getLangData();
        return langData.QuestionsMock;
    }
}