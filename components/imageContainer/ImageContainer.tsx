import { View, Image } from "react-native";
import { ReactNode } from "react";

type ImageSourcePropType = React.ComponentProps<typeof Image>["source"];
type Props = { imageSrc: ImageSourcePropType };

const ImageContainer: React.FC<Props> = (props) => {
  return <Image source={props.imageSrc} style={{ width: "auto", height: "100%", borderRadius: 10 }} />;
};

export default ImageContainer;
