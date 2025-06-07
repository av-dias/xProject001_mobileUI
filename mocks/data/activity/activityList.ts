import { ActivityType } from "../../../models/models";
import key from "../../../constants/key";

let Image1 = require("../../../assets/image1.png");
let Image2 = require("../../../assets/image2.png");
let Image3 = require("../../../assets/image3.png");
let Image1Small = require("../../../assets/image1-small.png");
let Image2Small = require("../../../assets/image2-small.png");
let Image3Small = require("../../../assets/image3-small.png");

let Image4 = require("../../../assets/image4.jpg");
let Image5 = require("../../../assets/image5.jpg");
let Image6 = require("../../../assets/image6.jpg");
let Image4Small = require("../../../assets/image4small.jpg");
let Image5Small = require("../../../assets/image5small.jpg");
let Image6Small = require("../../../assets/image6small.jpg");

export const activityListHandlerMock: ActivityType[] = [
  {
    id: key.activityType + "1",
    imageSrc: Image1,
    marker: Image1Small,
    title: "Bowling City Colombo",
    type: "Group",
    location: "1.3 km",
    price: 10,
    timetable: `{
      "Mon": { "start": "11:00", "end": "19:00" },
      "Tue": { "start": "11:00", "end": "19:00" },
      "Wed": { "start": "11:00", "end": "19:00" },
      "Thu": { "start": "11:00", "end": "19:00" },
      "Fri": { "start": "11:00", "end": "19:00" },
      "Sat": { "start": "09:00", "end": "16:00" },
      "Sun": { "start": "09:00", "end": "16:00" }
    }`,
    rate: 8.6,
    address: "Rua dos Colombos",
    coordinates: { latitude: 38.753418, longitude: -9.188391 },
    favorite: false,
  },
  {
    id: key.activityType + "2",
    imageSrc: Image2,
    marker: Image2Small,
    title: "Escape Lisbon",
    type: "Group",
    location: "1.8 km",
    price: 12,
    timetable: `{
      "Mon": { "start": "10:00", "end": "20:00" },
      "Tue": { "start": "10:00", "end": "20:00" },
      "Wed": { "start": "10:00", "end": "20:00" },
      "Thu": { "start": "10:00", "end": "20:00" },
      "Fri": { "start": "10:00", "end": "20:00" },
      "Sat": { "start": "10:00", "end": "18:00" },
      "Sun": { "start": "10:00", "end": "18:00" }
    }`,
    rate: 8.1,
    address: "Rua dos Lisboas",
    coordinates: { latitude: 38.763419, longitude: -9.188392 },
    favorite: false,
  },
  {
    id: key.activityType + "3",
    imageSrc: Image3,
    marker: Image3Small,
    title: "Golf",
    type: "Outdoor",
    location: "2.1 km",
    price: 20,
    timetable: `{
      "Mon": { "start": "10:00", "end": "14:00" },
      "Tue": { "start": "10:00", "end": "14:00" },
      "Wed": { "start": "10:00", "end": "12:00" },
      "Thu": { "start": "10:00", "end": "12:00" },
      "Fri": { "start": "10:00", "end": "18:00" },
      "Sat": { "start": "10:00", "end": "18:00" },
      "Sun": { "start": "10:00", "end": "18:00" }
    }`,
    rate: 8.6,
    address: "Rua dos Golfs",
    coordinates: { latitude: 38.75342, longitude: -9.198391 },
    favorite: false,
  },
  {
    id: key.activityType + "4",
    imageSrc: Image4,
    marker: Image4Small,
    title: "Bowling City Belem",
    type: "Group",
    location: "2.3 km",
    price: 10,
    timetable: `{
      "Mon": { "start": "Closed", "end": "Closed" },
      "Tue": { "start": "10:00", "end": "20:00" },
      "Wed": { "start": "10:00", "end": "20:00" },
      "Thu": { "start": "10:00", "end": "20:00" },
      "Fri": { "start": "10:00", "end": "20:00" },
      "Sat": { "start": "10:00", "end": "20:00" },
      "Sun": { "start": "10:00", "end": "20:00" }
    }`,
    rate: 10,
    address: "Rua do Belem",
    coordinates: { latitude: 38.753418, longitude: -9.178391 },
    favorite: false,
  },
  {
    id: key.activityType + "5",
    imageSrc: Image5,
    marker: Image5Small,
    title: "Escape Belem",
    type: "Group",
    location: "4.4 km",
    price: 4,
    timetable: `{
      "Mon": { "start": "08:00", "end": "20:00" },
      "Tue": { "start": "08:00", "end": "20:00" },
      "Wed": { "start": "08:00", "end": "20:00" },
      "Thu": { "start": "08:00", "end": "20:00" },
      "Fri": { "start": "08:00", "end": "20:00" },
      "Sat": { "start": "10:00", "end": "20:00" },
      "Sun": { "start": "10:00", "end": "20:00" }
    }`,
    rate: 7.2,
    address: "Rua dos Escapes",
    coordinates: { latitude: 38.743418, longitude: -9.188391 },
    favorite: false,
  },
  {
    id: key.activityType + "6",
    imageSrc: Image6,
    marker: Image6Small,
    title: "Golf in Belem",
    type: "Outdoor",
    location: "5.1 km",
    price: 16,
    timetable: `{
      "Mon": { "start": "10:00", "end": "14:00" },
      "Tue": { "start": "10:00", "end": "14:00" },
      "Wed": { "start": "10:00", "end": "14:00" },
      "Thu": { "start": "10:00", "end": "14:00" },
      "Fri": { "start": "10:00", "end": "14:00" },
      "Sat": { "start": "09:00", "end": "18:00" },
      "Sun": { "start": "09:00", "end": "18:00" }
    }`,
    rate: 5.4,
    address: "Rua dos Golfs",
    coordinates: { latitude: 38.763418, longitude: -9.178391 },
    favorite: false,
  },
];
