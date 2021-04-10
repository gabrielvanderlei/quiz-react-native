export type RootStackParamList = {
  Root: undefined;
  Home: undefined;
  Menu: undefined;
  Question: {
      id:String
  };
  Answer: {
      id:String,
      optionSelected: String
  };
  FinalResult: undefined;
  NotFound: undefined;
};

export type BottomTabParamList = {
  TabOne: undefined;
  TabTwo: undefined;
};

export type TabOneParamList = {
  TabOneScreen: undefined;
};

export type TabTwoParamList = {
  TabTwoScreen: undefined;
};
