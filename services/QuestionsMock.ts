export default [
    {
        id: "Q1",
        title: "Question 1",
        description: "Simple description about question",
        options: [
            {
                id: "O1",
                description: "Option 1"
            },
            
            {
                id: "O2",
                description: "Option 2"
            },
            
            {
                id: "O3",
                description: "Option 3"
            }
        ],

        correctAnswer: "O3",
        
        correctAnswerInformation: {
            title: "Correct answer to Q1",
            description: "Good job."
        },
        
        wrongAnswerInformation: {
            title: "Wrong answer to Q1",
            description: "The right answer was Q3."
        }
    }
];
