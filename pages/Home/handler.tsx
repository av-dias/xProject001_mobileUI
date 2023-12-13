import { ListRenderItemInfo } from "react-native";

import ContentBox from "../../components/contentBox";

let Image1 = require("../../assets/images/image1.jpg");
let Image2 = require("../../assets/images/image2.jpg");
let Image3 = require("../../assets/images/image3.jpg");

export type ActivityType = {
  imageSrc: any;
  title: string;
  location: string;
  price: number;
  timetable: string;
  rate: number;
  address: string;
};

const activityListHandler: ActivityType[] = [
  {
    imageSrc: Image1,
    title: "Bowling City Colombo",
    location: "1.3 km",
    price: 10,
    timetable: "10:00 - 20:00",
    rate: 8.6,
    address: "Rua dos Colombos",
  },
  { imageSrc: Image2, title: "Escape Lisbon", location: "1.8 km", price: 12, timetable: "09:00 - 21:00", rate: 8.1, address: "Rua dos Lisboas" },
  { imageSrc: Image3, title: "Golf", location: "2.1 km", price: 20, timetable: "09:00 - 22:00", rate: 8.6, address: "Rua dos Golfs" },
  {
    imageSrc: Image1,
    title: "Bowling City Belem",
    location: "2.3 km",
    price: 10,
    timetable: "11:00 - 21:00",
    rate: 10,
    address: "Rua do Belem",
  },
  { imageSrc: Image2, title: "Escape Belem", location: "4.4 km", price: 4, timetable: "12:00 - 16:00", rate: 7.2, address: "Rua dos Escapes" },
  { imageSrc: Image3, title: "Golf in Belem", location: "5.1 km", price: 16, timetable: "10:00 - 20:00", rate: 5.4, address: "Rua dos Golfs" },
];

const renderActivityItem = (render: ListRenderItemInfo<ActivityType>, navigation: any) => (
  <ContentBox
    imageSrc={render.item.imageSrc}
    title={render.item.title}
    location={render.item.location}
    price={render.item.price}
    timetable={render.item.timetable}
    rate={render.item.rate}
    navigation={() => navigation.navigate("ActivityDetails", render.item)}
  />
);

export { activityListHandler, renderActivityItem };
