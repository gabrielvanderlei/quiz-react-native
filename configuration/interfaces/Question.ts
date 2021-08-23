export interface IQuestion {
  id: string;
  title: string;
  description: string;
  asset?: any;
  answerAsset?: any;
  complement?: string;
  nextQuestion?: string;
  correctAnswer: string;
  correctAnswerInformation: { title: string; description: string };
  wrongAnswerInformation: { title: string; description: string };
  options: IOption[];
}

export interface IOption {
  id: string;
  description: string;
}