import { ReviewType } from "../../../models/models";
import key from "../../../constants/key";

export const reviewListHandlerMock: ReviewType[] = [
  {
    id: key.reviewItem + 1,
    title: "Perfect",
    text: "Best Bowling of Lisbon",
    rate: 10,
  },
  {
    id: key.reviewItem + 2,
    title: "Magnifico",
    text: "O melhor fora da margem sul",
    rate: 9,
  },
  {
    id: key.reviewItem + 3,
    title: "Great",
    text: "Great great great!",
    rate: 8,
  },
  {
    id: key.reviewItem + 4,
    title: "Excelente",
    text: "Grande simpatia da staff",
    rate: 9.6,
  },
  {
    id: key.reviewItem + 5,
    title: "Perfect",
    text: "Recomendo todos os dias!",
    rate: 10,
  },
  {
    id: key.reviewItem + 6,
    title: "Perfect",
    text: "Best Bowling of Lisbon",
    rate: 9,
  },
];
