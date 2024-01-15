import { ActivityType, ReviewType, AvailableType } from "./models";
import key from "./key";

let Image1 = require("../assets/image1.png");
let Image2 = require("../assets/image2.png");
let Image3 = require("../assets/image3.png");
let Image1Small = require("../assets/image1-small.png");
let Image2Small = require("../assets/image2-small.png");
let Image3Small = require("../assets/image3-small.png");

export const activityListHandlerMock: ActivityType[] = [
  {
    id: key.activityType + "1",
    imageSrc: Image1,
    marker: Image1Small,
    title: "Bowling City Colombo",
    type: "Group",
    location: "1.3 km",
    price: 10,
    timetable: "10:00 - 20:00",
    rate: 8.6,
    address: "Rua dos Colombos",
    coordinates: { latitude: 38.753418, longitude: -9.188391 },
  },
  {
    id: key.activityType + "2",
    imageSrc: Image2,
    marker: Image2Small,
    title: "Escape Lisbon",
    type: "Group",
    location: "1.8 km",
    price: 12,
    timetable: "09:00 - 21:00",
    rate: 8.1,
    address: "Rua dos Lisboas",
    coordinates: { latitude: 38.763419, longitude: -9.188392 },
  },
  {
    id: key.activityType + "3",
    imageSrc: Image3,
    marker: Image3Small,
    title: "Golf",
    type: "Outdoor",
    location: "2.1 km",
    price: 20,
    timetable: "09:00 - 22:00",
    rate: 8.6,
    address: "Rua dos Golfs",
    coordinates: { latitude: 38.75342, longitude: -9.198391 },
  },
  {
    id: key.activityType + "4",
    imageSrc: Image1,
    marker: Image1Small,
    title: "Bowling City Belem",
    type: "Group",
    location: "2.3 km",
    price: 10,
    timetable: "11:00 - 21:00",
    rate: 10,
    address: "Rua do Belem",
    coordinates: { latitude: 38.753418, longitude: -9.178391 },
  },
  {
    id: key.activityType + "5",
    imageSrc: Image2,
    marker: Image2Small,
    title: "Escape Belem",
    type: "Group",
    location: "4.4 km",
    price: 4,
    timetable: "12:00 - 16:00",
    rate: 7.2,
    address: "Rua dos Escapes",
    coordinates: { latitude: 38.743418, longitude: -9.188391 },
  },
  {
    id: key.activityType + "6",
    imageSrc: Image3,
    marker: Image3Small,
    title: "Golf in Belem",
    type: "Outdoor",
    location: "5.1 km",
    price: 16,
    timetable: "10:00 - 20:00",
    rate: 5.4,
    address: "Rua dos Golfs",
    coordinates: { latitude: 38.763418, longitude: -9.178391 },
  },
];

export const reviewListHandlerMock: ReviewType[] = [
  { id: key.reviewItem + 1, title: "Perfect", text: "Best Bowling of Lisbon", rate: 10 },
  { id: key.reviewItem + 2, title: "Magnifico", text: "O melhor fora da margem sul", rate: 9 },
  { id: key.reviewItem + 3, title: "Great", text: "Great great great!", rate: 8 },
  { id: key.reviewItem + 4, title: "Excelente", text: "Grande simpatia da staff", rate: 9.6 },
  { id: key.reviewItem + 5, title: "Perfect", text: "Recomendo todos os dias!", rate: 10 },
  { id: key.reviewItem + 6, title: "Perfect", text: "Best Bowling of Lisbon", rate: 9 },
];

export const availableListHandlerMock: AvailableType[] = [
  { id: key.availableItem + 1, title: "x" },
  { id: key.availableItem + 2, title: "x" },
  { id: key.availableItem + 3, title: "x" },
  { id: key.availableItem + 4, title: "x" },
  { id: key.availableItem + 5, title: "x" },
  { id: key.availableItem + 6, title: "x" },
];
