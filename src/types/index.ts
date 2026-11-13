export type Note = {
  id: string;
  title: string;
  content: string;
  tags: string[];
  createdAt: string;
  updatedAt: string;
};

export type QuizQuestion = {
  prompt: string;
  answer: string;
};
