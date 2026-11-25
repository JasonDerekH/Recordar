export type Note = {
  id: string;
  title: string;
  content: string;
  tags: string[];
  createdAt: string;
  updatedAt: string;
};

export type Question = {
  id: string;
  noteId: string;
  prompt: string;
  answer: string;
};

export type QuizResult = {
  questionId: string;
  correct: boolean;
};
