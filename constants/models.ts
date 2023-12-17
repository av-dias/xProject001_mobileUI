export type AvailableType = {
  id: string;
  title: string;
};

export type ReviewType = {
  id: string;
  title: string;
  text: string;
  rate: number;
};

export type ActivityType = {
  imageSrc: any;
  marker: any;
  title: string;
  location: string;
  price: number;
  timetable: string;
  rate: number;
  address: string;
  coordinates: Coordinate;
};

export type Coordinate = {
  latitude: number;
  longitude: number;
};
