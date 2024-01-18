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
  id: string;
  imageSrc: any;
  marker: any;
  title: string;
  type: string;
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

export type FavoriteType = {
  id: String;
  name: String;
  activityList: ActivityType[] | null;
};
