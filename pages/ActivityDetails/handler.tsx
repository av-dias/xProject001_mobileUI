import key from "../../constants/key";

export type ReviewType = {
  id: string;
  title: string;
  text: string;
  rate: number;
};

const reviewListHandler: ReviewType[] = [
  { id: key.reviewItem + 1, title: "Perfect", text: "Best Bowling of Lisbon", rate: 10 },
  { id: key.reviewItem + 2, title: "Magnifico", text: "O melhor fora da margem sul", rate: 9 },
  { id: key.reviewItem + 3, title: "Great", text: "Great great great!", rate: 8 },
  { id: key.reviewItem + 4, title: "Excelente", text: "Grande simpatia da staff", rate: 9.6 },
  { id: key.reviewItem + 5, title: "Perfect", text: "Recomendo todos os dias!", rate: 10 },
  { id: key.reviewItem + 6, title: "Perfect", text: "Best Bowling of Lisbon", rate: 9 },
];

export type AvailableType = {
  id: string;
  title: string;
};

const availableListHandler: AvailableType[] = [
  { id: key.availableItem + 1, title: "x" },
  { id: key.availableItem + 2, title: "x" },
  { id: key.availableItem + 3, title: "x" },
  { id: key.availableItem + 4, title: "x" },
  { id: key.availableItem + 5, title: "x" },
  { id: key.availableItem + 6, title: "x" },
];

export { reviewListHandler, availableListHandler };
