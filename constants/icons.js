import { AntDesign, MaterialIcons, Ionicons } from "@expo/vector-icons";

import key from "./key";

const iconsfilter = [
  { name: key.iconfilter + "sports-soccer", icon: <MaterialIcons name="sports-soccer" size={24} color="black" /> },
  { name: key.iconfilter + "photo-camera", icon: <MaterialIcons name="photo-camera" size={24} color="black" /> },
  { name: key.iconfilter + "trail-sign-outline", icon: <Ionicons name="trail-sign-outline" size={24} color="black" /> },
  { name: key.iconfilter + "sports-soccer2", icon: <MaterialIcons name="sports-soccer" size={24} color="black" /> },
  { name: key.iconfilter + "photo-camera2", icon: <MaterialIcons name="photo-camera" size={24} color="black" /> },
  { name: key.iconfilter + "trail-sign-outline2", icon: <Ionicons name="trail-sign-outline" size={24} color="black" /> },
  { name: key.iconfilter + "sports-soccer3", icon: <MaterialIcons name="sports-soccer" size={24} color="black" /> },
  { name: key.iconfilter + "photo-camera3", icon: <MaterialIcons name="photo-camera" size={24} color="black" /> },
  { name: key.iconfilter + "trail-sign-outline3", icon: <Ionicons name="trail-sign-outline" size={24} color="black" /> },
];

const heartIcon = (size = 40) => <AntDesign name="hearto" size={size} color={color.light.red} />;
const fullHeartIcon = (size = 40) => <AntDesign name="heart" size={size} color={color.light.red} />;
const loginIcon = (size = 40) => <AntDesign name="login" size={size} color={"black"} />;
export { iconsfilter, heartIcon, fullHeartIcon, loginIcon };
